import { Rating } from '../valueObject/Rating';

export class Feedback{
    private rating:Rating;
    private anythingToAdd:string;
    private userName:string;
    private userEmail:string;
  constructor(rating:number, anythingToAdd:string, userName:string, userEmail:string) {
    this.rating = new Rating(rating);
    this.anythingToAdd = anythingToAdd;
    this.userName = userName;
    this.userEmail = userEmail;
  }
  feedbackFormatter() {
    const ratingPhrase = this.rating.convertRatingNumberToPhrase()
    const contentOfTheMail = `User Email: ${this.userEmail} \nUserName: ${this.userName} \nUser Rating : ${ratingPhrase} \nElaboration: ${this.anythingToAdd}`;
    return contentOfTheMail;
  }
}
