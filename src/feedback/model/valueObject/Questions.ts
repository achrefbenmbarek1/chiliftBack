import {IQuestions} from '../../type/Questions/IQuestions'
export class Questions {
    private questions: IQuestions;
    constructor(questions: IQuestions) {
        const numberOfQuestions = Object.keys(questions).length;
        if (numberOfQuestions !== 3 )
            throw new Error("invalid data")
        this.questions = questions;
    }
    formatQuestions() {
        return `question1:${this.questions['question1']}\nquestion2:${this.questions['question2']}\nquestion3:${this.questions['question3']}`;
    }
};

