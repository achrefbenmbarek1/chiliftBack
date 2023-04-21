import { IQuestions } from "../../type/Questions/IQuestions";
import { IFeedback } from "../odm/feedback";

export interface FeedbackRepo{
    saveFeedback(rating:number,anythingToAdd:string,userName:string,userEmail:string,questions:IQuestions):Promise<void>;
    getFeedbacks():Promise<IFeedback[]>;
}
