import { Feedback } from '../entity/Feedback';
import { sendEmail } from '../../service/SendingMail';
import { FeedbackRepo } from '../../db/repository/FeedbackRepo';
import { IQuestions } from '../../type/Questions/IQuestions';
import { IFeedback } from '../../db/odm/feedback';
export class FeedbackInteractor {
    private feedbackRepo: FeedbackRepo;
    constructor(feedbackRepo: FeedbackRepo) {
        this.feedbackRepo = feedbackRepo;
    }
    public async sendFeedback(rating: number, anythingToAdd: string, userName: string, userEmail: string, questions: IQuestions): Promise<void> {
        console.log("dkhalit")
        const feedback = new Feedback(rating, anythingToAdd, userName, userEmail, questions);
        console.log("dkhalit2")
        const feedbackContent = feedback.feedbackFormatter();
        console.log("ena lina");
        await this.feedbackRepo.saveFeedback(rating, anythingToAdd, userName, userEmail, questions)
        sendEmail(feedbackContent)
    }
    public async retrieveFeedbacks(): Promise<IFeedback[]> {
        try {
            const feedbacks: IFeedback[] = await this.feedbackRepo.getFeedbacks();
            console.log(feedbacks);
            return feedbacks;

        } catch (error) {
            throw error;
        }
    }
}

