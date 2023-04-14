import { IQuestions } from '../../type/Questions/IQuestions';
import { Questions } from '../valueObject/Questions';
import { Rating } from '../valueObject/Rating';

export class Feedback{
    private rating:Rating;
    private anythingToAdd:string;
    private userName:string;
    private userEmail:string;
    private questions:Questions;
  constructor(rating:number, anythingToAdd:string, userName:string, userEmail:string, questions: IQuestions) {
    this.rating = new Rating(rating);
    this.anythingToAdd = anythingToAdd;
    this.userName = userName;
    this.userEmail = userEmail;
    this.questions = new Questions(questions);
  }
  feedbackFormatter() {
    const ratingPhrase = this.rating.convertRatingNumberToPhrase()
    const contentOfTheMail = `User Email: ${this.userEmail} \nUserName: ${this.userName} \nUser Rating : ${ratingPhrase} \nElaboration: ${this.anythingToAdd} \n${this.questions.formatQuestions()}`;
    return contentOfTheMail;
  }
}
