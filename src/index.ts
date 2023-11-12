import express from "express";
import bodyParser from "body-parser";
import connectToDb from './shared/db';
import * as dotenv from 'dotenv'
import { authRouter } from "./shared/authentification/routes/authRoutes";
import { feedbackRouter } from './feedback/router/feedbackRouter'
import {usersDataRouter} from './UsersData/router/userDataRouter'
import {articleRouter} from './article/router/articleRouter'
import path from "path";
import { tableHeightsRouter } from "./tableControl/infrastructure/router/TableSelectedHeightsRouter";
dotenv.config({ path: __dirname+'/.env' });
const app = express();
const PORT = Number(process.env.PORT);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'uploads')));
app.use(authRouter)
app.use('/feedbacks', feedbackRouter);
app.use('/usersData', usersDataRouter);
app.use('/articles', articleRouter);
app.use('/tableHeights', tableHeightsRouter);

connectToDb(process.env.MONGO_URL as string).then(
    () => {
        app.listen(PORT, () => {
            console.log(`server is running on port ${PORT} `);
        })
    }).catch(error => {
        console.log(error)
        console.log(process.env.MONGO_URL)
    })
