"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedback_sendMail = void 0;
const sendFeedbackInteractor_1 = require("../model/interactor/sendFeedbackInteractor");
const FeedbackRepoImpl_1 = require("../db/repository/FeedbackRepoImpl");
const feedback_sendMail = (req, res) => {
    try {
        console.log(req.user);
        const { anythingToAdd, rating, questions } = req.body;
        const feedbackData = { anythingToAdd, rating, userName: req.user.firstName + " " + req.user.lastName, userMail: req.user.email };
        const feedbackRepo = new FeedbackRepoImpl_1.FeedbackRepoImpl();
        const sendFeedbackInteractor = new sendFeedbackInteractor_1.SendFeedbackInteractor(feedbackRepo);
        sendFeedbackInteractor.sendFeedback(rating, anythingToAdd, feedbackData.userName, feedbackData.userMail, questions);
        res.send("thanks for submitting");
    }
    catch (error) {
        res.status(400).send(`problem when submitting the feedback ${error}`);
    }
};
exports.feedback_sendMail = feedback_sendMail;
