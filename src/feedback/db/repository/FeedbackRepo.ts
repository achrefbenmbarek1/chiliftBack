import { IQuestions } from "../../type/Questions/IQuestions";

export interface FeedbackRepo{
    saveFeedback(rating:number,anythingToAdd:string,userName:string,userEmail:string,questions:IQuestions):Promise<void>;
}
