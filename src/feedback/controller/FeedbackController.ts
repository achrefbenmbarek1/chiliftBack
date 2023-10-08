import { Response, Request } from 'express'
import { FeedbackRepoImpl } from '../db/repository/FeedbackRepoImpl';
import { IFeedback } from '../db/odm/feedback';
import { FeedbackInteractor } from '../interactor/FeedbackInteractor';

export class FeedBackController {
    private feedbackInteractor = new FeedbackInteractor(new FeedbackRepoImpl());

    public sendFeedback = (req: Request, res: Response)=>{
        try {
            console.log(req.user)
            const { anythingToAdd, rating, questions } = req.body
            const feedbackData = { anythingToAdd, rating, userName: req.user.firstName + " " + req.user.lastName, userMail: req.user.email }
            console.log("ena dkhaaaalit",this.feedbackInteractor)
            this.feedbackInteractor.sendFeedback(rating, anythingToAdd, feedbackData.userName, feedbackData.userMail, questions);
            res.send("thanks for submitting");
        } catch (error) {
            res.status(400).send(`problem when submitting the feedback ${error}`)
        }

    }
    public retrieveFeedback = async (req:Request, res:Response)=>{
        try {
           const feedbacks:IFeedback[] = await this.feedbackInteractor.retrieveFeedbacks(); 
            res.send(feedbacks);
        } catch (error) {
            res.sendStatus(400);
            
        }
    }
}

