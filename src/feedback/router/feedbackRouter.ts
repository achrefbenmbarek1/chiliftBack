import {Router} from 'express';
import { authMiddleware } from '../../shared/authentification/Middlewares/AuthTokenRequired';
import { feedback_sendMail } from '../controller/feedbackController'
export const feedbackRouter = Router();

feedbackRouter.post('/',authMiddleware,feedback_sendMail);

