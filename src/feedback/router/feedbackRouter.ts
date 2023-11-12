import {Router} from 'express';
import { authMiddleware } from '../../shared/authentification/Middlewares/AuthTokenRequired';
import { FeedBackController } from '../controller/FeedbackController'
export const feedbackRouter = Router();
const feedbackController = new FeedBackController();
feedbackRouter.post('/', authMiddleware, (req, res)=> {
  feedbackController.sendFeedback(req, res);
})
feedbackRouter.get('/all',feedbackController.retrieveFeedback);

