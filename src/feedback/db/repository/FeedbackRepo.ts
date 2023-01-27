export interface FeedbackRepo{
    saveFeedback(rating:number,anythingToAdd:string,userName:string,userEmail:string):Promise<void>;
}
