import Feedback from "../odm/feedback";

export class FeedbackRepoImpl{
    public async saveFeedback(rating:number, anythingToAdd:string, userName:string, userEmail:string):Promise<void> {
        try {
            const newFeedback = new Feedback({  userName, userEmail,anythingToAdd,rating });
            console.log(newFeedback)
            await newFeedback.save();
        } catch (error:any) {
            throw new Error("a problem occured while saving the feedback")
        }
    };
} 
