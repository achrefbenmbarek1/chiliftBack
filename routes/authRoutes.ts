import express from "express";
import User from "../models/User"
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
//
// require("dotenv").config();
export const authRouter = express.Router();
authRouter.post("/signup", (req, res) => {
    // console.log("sent by client - ", req.body);
    const {
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
        gender,
        job,
        height,
        health,
    } = req.body;
    if (
        !firstName ||
        !lastName ||
        !email ||
        !password ||
        !phoneNumber ||
        !gender ||
        !job ||
        !height ||
        !health
    ) {
        return res.status(422).send({ error: "please fill all the fields" });
    }
    User.findOne({ email: email }).then(async (savedUser) => {
        if (savedUser) {
            res.status(422).send({ error: "Invalid Credentials" });
        }
        const user = new User({
            firstName,
            lastName,
            email,
            password,
            phoneNumber,
            gender,
            job,
            height,
            health,
        });
        try {
            await user.save();
            // res.send({message: "user saved successfully"});
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET as string);
            res.send({ message: "User registred Successfully", token });
        } catch (err:any) {
            console.log("db error", err);
            return res.status(422).send({ error: err.message });
        }
    });
});

authRouter.post("/signin", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({ error: "Please add email or password" });
    }
    const savedUser = await User.findOne({ email: email });

    if (!savedUser) {
        return res.status(422).json({ error: "Invalid Credentials" });
    }

    try {
        bcrypt.compare(password, savedUser.password, (err, result) => {
            if (result) {
                console.log("Password matched");
                const token = jwt.sign({ _id: savedUser._id }, process.env.JWT_SECRET as string);
                res.send({ token });
            } else {
                console.log("Password does not match");
                return res.status(422).json({ error: "Invalid Credentials" });
            }
        });
    } catch (err) {
        console.log(err);
    }
});

