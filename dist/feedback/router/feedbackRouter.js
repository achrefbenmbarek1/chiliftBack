"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedbackRouter = void 0;
const express_1 = require("express");
const AuthTokenRequired_1 = require("../../shared/authentification/Middlewares/AuthTokenRequired");
const feedbackController_1 = require("../controller/feedbackController");
exports.feedbackRouter = (0, express_1.Router)();
exports.feedbackRouter.post('/', AuthTokenRequired_1.authMiddleware, feedbackController_1.feedback_sendMail);
