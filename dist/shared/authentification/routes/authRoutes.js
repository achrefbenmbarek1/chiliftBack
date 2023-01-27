"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = __importDefault(require("express"));
const User_1 = __importDefault(require("../models/User"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
//
// require("dotenv").config();
exports.authRouter = express_1.default.Router();
exports.authRouter.post("/signup", (req, res) => {
    // console.log("sent by client - ", req.body);
    const { firstName, lastName, email, password, phoneNumber, gender, job, height, health, } = req.body;
    if (!firstName ||
        !lastName ||
        !email ||
        !password ||
        !phoneNumber ||
        !gender ||
        !job ||
        !height ||
        !health) {
        return res.status(422).send({ error: "please fill all the fields" });
    }
    User_1.default.findOne({ email: email }).then((savedUser) => __awaiter(void 0, void 0, void 0, function* () {
        if (savedUser) {
            res.status(422).send({ error: "Invalid Credentials" });
        }
        const user = new User_1.default({
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
            yield user.save();
            // res.send({message: "user saved successfully"});
            const token = jsonwebtoken_1.default.sign({ _id: user._id }, process.env.JWT_SECRET);
            res.send({ message: "User registred Successfully", token });
        }
        catch (err) {
            console.log("db error", err);
            return res.status(422).send({ error: err.message });
        }
    }));
});
exports.authRouter.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({ error: "Please add email or password" });
    }
    const savedUser = yield User_1.default.findOne({ email: email });
    if (!savedUser) {
        return res.status(422).json({ error: "Invalid Credentials" });
    }
    try {
        bcrypt_1.default.compare(password, savedUser.password, (err, result) => {
            if (result) {
                console.log("Password matched");
                const token = jsonwebtoken_1.default.sign({ _id: savedUser._id }, process.env.JWT_SECRET);
                res.send({ token });
            }
            else {
                console.log("Password does not match");
                return res.status(422).json({ error: "Invalid Credentials" });
            }
        });
    }
    catch (err) {
        console.log(err);
    }
}));
