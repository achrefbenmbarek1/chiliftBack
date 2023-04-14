"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feedback = void 0;
const Questions_1 = require("../valueObject/Questions");
const Rating_1 = require("../valueObject/Rating");
class Feedback {
    constructor(rating, anythingToAdd, userName, userEmail, questions) {
        this.rating = new Rating_1.Rating(rating);
        this.anythingToAdd = anythingToAdd;
        this.userName = userName;
        this.userEmail = userEmail;
        this.questions = new Questions_1.Questions(questions);
    }
    feedbackFormatter() {
        const ratingPhrase = this.rating.convertRatingNumberToPhrase();
        const contentOfTheMail = `User Email: ${this.userEmail} \nUserName: ${this.userName} \nUser Rating : ${ratingPhrase} \nElaboration: ${this.anythingToAdd} \n${this.questions.formatQuestions()}`;
        return contentOfTheMail;
    }
}
exports.Feedback = Feedback;
