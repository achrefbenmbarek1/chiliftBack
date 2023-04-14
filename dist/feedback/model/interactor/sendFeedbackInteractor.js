"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendFeedbackInteractor = void 0;
const Feedback_1 = require("../entity/Feedback");
const SendingMail_1 = require("../../service/SendingMail");
class SendFeedbackInteractor {
    constructor(feedbackRepo) {
        this.feedbackRepo = feedbackRepo;
    }
    sendFeedback(rating, anythingToAdd, userName, userEmail, questions) {
        let feedback = new Feedback_1.Feedback(rating, anythingToAdd, userName, userEmail, questions);
        const feedbackContent = feedback.feedbackFormatter();
        this.feedbackRepo.saveFeedback(rating, anythingToAdd, userName, userEmail, questions);
        (0, SendingMail_1.sendEmail)(feedbackContent);
    }
}
exports.SendFeedbackInteractor = SendFeedbackInteractor;
