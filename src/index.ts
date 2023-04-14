import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import connectToDb from './shared/db';
import * as dotenv from 'dotenv'
import { authRouter } from "./shared/authentification/routes/authRoutes";

import { authMiddleware } from './shared/authentification/Middlewares/AuthTokenRequired';
import { feedbackRouter } from './feedback/router/feedbackRouter'

dotenv.config({ path: __dirname+'/.env' });
const app = express();
const PORT = Number(process.env.PORT);
//
//
//
app.use(bodyParser.json());
app.use(authRouter)
app.use('/feedbacks', feedbackRouter);

app.get('/', authMiddleware, (req: Request, res: Response) => {
    console.log(req.user);
    res.send(req.user);
})
connectToDb(process.env.MONGO_URL as string).then(
    () => {
        app.listen(PORT, () => {
            console.log(`server is running on port ${PORT} `);
        })
    }).catch(error => {
        console.log(error)
        console.log(process.env.MONGO_URL)
    })
