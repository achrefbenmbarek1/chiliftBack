import mongoose, { Schema, Document } from "mongoose";
import { IQuestions } from "../../type/Questions/IQuestions";

export interface IFeedback extends Document {
    userName: string;
    userEmail: string;
    anythingToAdd: string;
    rating: number;
    questions:IQuestions;
}

const feedbackSchema: Schema = new Schema({
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    anythingToAdd: {
        type: String,
        default: ""
    },
    rating: {
        type: Number,
        required: true
    },
    questions: {
        question1:{type:String, default: ""}, 
        question2:{type:String, default: ""},
        question3:{type:String, default: ""}
    }
});

const Feedback = mongoose.model<IFeedback>("IFeedback", feedbackSchema);

export default Feedback;
