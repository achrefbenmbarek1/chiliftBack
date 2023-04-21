import User, { IUser } from "../../shared/authentification/models/User";
import { Response, Request } from 'express'
import { PhoneNumber } from "../model/valueObject/PhoneNumber";
import { Height } from "../model/valueObject/Height";

export const retrieveUsersData = async (req: Request, res: Response): Promise<void> => {
    try {
        const users: IUser[] = await User.find();
        users.forEach(user=>{
            const phoneNumber = new PhoneNumber(user.phoneNumber);
            const height = new Height(user.height);
        })
        console.log(users);
        res.send(users);

    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
};

