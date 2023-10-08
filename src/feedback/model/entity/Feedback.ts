import { IQuestions } from "../../type/Questions/IQuestions";
import { Questions } from "../valueObject/Questions";
import { Rating } from "../valueObject/Rating";

export class Feedback {
  private rating: Rating;
  private anythingToAdd: string;
  private userName: string;
  private userEmail: string;
  private questions: Questions;
  constructor(
    rating: number,
    anythingToAdd: string,
    userName: string,
    userEmail: string,
    questions: IQuestions,
  ) {
    this.rating = new Rating(rating);
    this.anythingToAdd = anythingToAdd;
    this.userName = userName;
    this.userEmail = userEmail;
    this.questions = new Questions(questions);
  }
  feedbackHtmlFormatter() {
    const ratingPhrase = this.rating.convertRatingNumberToPhrase();
    const contentOfTheMail =
      `<<h3>Email: </h3> ${this.userEmail} \n <h3>UserName: </h3> ${this.userName} \n <h3>User Rating :</h3> ${ratingPhrase} \n <h3>Elaboration: </h3> ${this.anythingToAdd} \n <h3> questions: </h3> \n ${this.questions.formatQuestions()}`;
    return contentOfTheMail;
  }
  feedbackTextFormatter() {
    const ratingPhrase = this.rating.convertRatingNumberToPhrase();
    const contentOfTheMail =
      `User Email: ${this.userEmail} \nUserName: ${this.userName} \nUser Rating : ${ratingPhrase} \nElaboration: ${this.anythingToAdd} \n Questions:\n ${this.questions.formatQuestions()}`;
    return contentOfTheMail;
  }
}
