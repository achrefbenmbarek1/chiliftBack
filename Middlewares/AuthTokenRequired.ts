import * as jwt from 'jsonwebtoken';
import {  Request,Response } from 'express'
import User from '../models/User';

export const authMiddleware = async (req: Request, res: Response, next: Function): Promise<void> => {
    const { authorization } = req.headers;
    // authorization === Bearer ewfjwefjwef
    if (!authorization) {
        res.status(401).json({ error: "You must be logged in, token not given" });
    }
    else {

        const token = authorization.replace("Bearer ", "");
        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET as string);
            const { _id } = payload as { _id: string };
            const userData = await User.findById(_id);
            req.user = userData;
            next();
        } catch (err) {
            res.status(401).json({ error: "You must be logged in, token invalid" });
        }
    }
}



