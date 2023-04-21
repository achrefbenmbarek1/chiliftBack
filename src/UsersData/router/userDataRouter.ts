import {Router} from 'express';
import { authMiddleware } from '../../shared/authentification/Middlewares/AuthTokenRequired';
import { retrieveUsersData } from '../controller/UsersDataController';
export const usersDataRouter = Router();
usersDataRouter.get('/',retrieveUsersData);

