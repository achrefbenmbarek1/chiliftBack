
import mongoose, { Schema, Document } from "mongoose";

export interface IArticle extends Document {
    title: string;
    imageName: string;
    content: string;
}

const articleSchema: Schema = new Schema({
    title: {
        type: String,
        required: true
    },
    imageName: {
        type: String,
        default: ""
    },
    content: {
        type: String,
        required: true
    },
});

const Article = mongoose.model<IArticle>("IArticle", articleSchema);

export default Article;
