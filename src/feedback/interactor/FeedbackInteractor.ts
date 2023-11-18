import { FeedbackRepo } from "../db/repository/FeedbackRepo";
import { IQuestions } from "../type/Questions/IQuestions";
import { IFeedback } from "../db/odm/feedback";
import { Feedback } from "../model/entity/Feedback";
import { sendMail } from "../service/MailSender";
export class FeedbackInteractor {
  private feedbackRepo: FeedbackRepo;
  constructor(feedbackRepo: FeedbackRepo) {
    this.feedbackRepo = feedbackRepo;
  }
  public async sendFeedback(
    rating: number,
    anythingToAdd: string,
    userName: string,
    userEmail: string,
    questions: IQuestions,
  ): Promise<void> {
    console.log("dkhalit");
    const feedback = new Feedback(
      rating,
      anythingToAdd,
      userName,
      userEmail,
      questions,
    );
    console.log("dkhalit2");
    const feedbackTextContent = feedback.feedbackTextFormatter();
    const feedbackHtmlContent = feedback.feedbackHtmlFormatter()
    await this.feedbackRepo.saveFeedback(
      rating,
      anythingToAdd,
      userName,
      userEmail,
      questions,
    );
      console.log('jit lina')
      await sendMail(feedbackTextContent, feedbackHtmlContent);
    console.log('9rit ilkol')
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
