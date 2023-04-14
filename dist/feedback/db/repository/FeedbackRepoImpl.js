"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackRepoImpl = void 0;
const feedback_1 = __importDefault(require("../odm/feedback"));
class FeedbackRepoImpl {
    saveFeedback(rating, anythingToAdd, userName, userEmail, questions) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newFeedback = new feedback_1.default({ userName, userEmail, anythingToAdd, rating, questions });
                console.log(newFeedback);
                yield newFeedback.save();
            }
            catch (error) {
                throw new Error("a problem occured while saving the feedback");
            }
        });
    }
    ;
}
exports.FeedbackRepoImpl = FeedbackRepoImpl;
