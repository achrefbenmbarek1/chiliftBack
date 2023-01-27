import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import connectToDb from './db';
import * as dotenv from 'dotenv'
import { authRouter } from "./routes/authRoutes";

import { authMiddleware } from './Middlewares/AuthTokenRequired';

const app = express();
//
//
dotenv.config();
//
app.use(bodyParser.json());
app.use(authRouter)


app.get('/', authMiddleware, (req: Request, res: Response) => {
    console.log(req.user);
    res.send(req.user);
})
connectToDb(process.env.mongo_URL as string).then(
    () => {
        app.listen(process.env.port, () => {
            console.log(`server is running on port ${process.env.port} `);
        })
    }
).catch(error => {
    console.log(error)
    console.log(process.env.mongo_URL as string)
})
