"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Questions = void 0;
class Questions {
    constructor(questions) {
        const numberOfQuestions = Object.keys(questions).length;
        if (numberOfQuestions !== 3)
            throw new Error("invalid data");
        this.questions = questions;
    }
    formatQuestions() {
        return `question1:${this.questions['question1']}\nquestion2:${this.questions['question2']}\nquestion3:${this.questions['question3']}`;
    }
}
exports.Questions = Questions;
;
