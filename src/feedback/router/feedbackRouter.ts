import {Router} from 'express';
import { feedback_sendMail } from '../controller/feedbackController'
export const feedbackRouter = Router();

feedbackRouter.post('/',feedback_sendMail);

