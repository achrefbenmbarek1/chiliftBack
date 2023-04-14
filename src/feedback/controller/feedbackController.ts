import { SendFeedbackInteractor } from '../model/interactor/sendFeedbackInteractor';
import { Response, Request } from 'express'
import { FeedbackRepoImpl } from '../db/repository/FeedbackRepoImpl';

export const feedback_sendMail = (req: Request, res: Response) => {
    try {
        console.log(req.user)
    const {anythingToAdd, rating, questions }= req.body
        const feedbackData = { anythingToAdd, rating, userName:req.user.firstName + " " + req.user.lastName, userMail:req.user.email}
        const feedbackRepo = new FeedbackRepoImpl();
        const sendFeedbackInteractor = new SendFeedbackInteractor(feedbackRepo);
        sendFeedbackInteractor.sendFeedback(rating, anythingToAdd, feedbackData.userName, feedbackData.userMail,questions);
        res.send("thanks for submitting");
    }catch(error){
        res.status(400).send(`problem when submitting the feedback ${error}`)
    }
  
}

