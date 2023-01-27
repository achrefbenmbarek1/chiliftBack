import { SendFeedbackInteractor } from '../model/interactor/sendFeedbackInteractor';
import { Response, Request } from 'express'
import { FeedbackRepoImpl } from '../db/repository/FeedbackRepoImpl';

export const feedback_sendMail = (req: Request, res: Response) => {
    try {
    const {anythingToAdd, rating, user}= req.body
        const feedbackData = { anythingToAdd, rating, userName:user.firstName + " " + user.lastName, userMail:user.email}
        let feedbackRepo = new FeedbackRepoImpl();
        let sendFeedbackInteractor = new SendFeedbackInteractor(feedbackRepo);
        sendFeedbackInteractor.sendFeedback(rating, anythingToAdd, feedbackData.userName, feedbackData.userMail);
        res.send("thanks for submitting");
    }catch(error){
        res.status(400).send(`problem when submitting the feedback ${error}`)
    }
  
}

