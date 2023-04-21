import { IQuestions } from "../../type/Questions/IQuestions";
import Feedback, { IFeedback } from "../odm/feedback";
import { FeedbackRepo } from "./FeedbackRepo";

export class FeedbackRepoImpl implements FeedbackRepo {
    public async saveFeedback(rating: number, anythingToAdd: string, userName: string, userEmail: string, questions: IQuestions): Promise<void> {
        try {
            const newFeedback = new Feedback({ userName, userEmail, anythingToAdd, rating, questions });
            console.log(newFeedback)
            await newFeedback.save();
        } catch (error: any) {
            throw new Error("a problem occured while saving the feedback")
        }
    };
    public async getFeedbacks(): Promise<IFeedback[]> {
        try {
            const feedbacks: IFeedback[] = await Feedback.find(); 
            return feedbacks;
        } catch (error) {
            console.error("Error getting feedbacks:", error);
            throw error;
        }
    };
} 
