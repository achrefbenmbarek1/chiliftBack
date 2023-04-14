import { Feedback } from '../entity/Feedback';
import { sendEmail } from '../../service/SendingMail';
import { FeedbackRepo } from '../../db/repository/FeedbackRepo';
import { IQuestions } from '../../type/Questions/IQuestions';
export class SendFeedbackInteractor {
    private feedbackRepo: FeedbackRepo;
    constructor(feedbackRepo: FeedbackRepo) {
        this.feedbackRepo = feedbackRepo;
    }
    public sendFeedback(rating: number, anythingToAdd: string, userName: string, userEmail: string,questions:IQuestions) {
        let feedback = new Feedback(rating, anythingToAdd, userName, userEmail,questions);
        const feedbackContent = feedback.feedbackFormatter();
        this.feedbackRepo.saveFeedback(rating, anythingToAdd, userName, userEmail,questions)
        sendEmail(feedbackContent)
    }
}

