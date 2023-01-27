import mongoose, { Schema, Document } from "mongoose";

interface IFeedback extends Document {
    userName: string;
    userEmail: string;
    anythingToAdd: string;
    rating: number;
}

const feedbackSchema: Schema = new Schema({
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true,
        unique: true
    },
    anythingToAdd: {
        type: String,
        default: ""
    },
    rating: {
        type: Number,
        required: true
    },
});

const Feedback = mongoose.model<IFeedback>("IFeedback", feedbackSchema);

export default Feedback;
