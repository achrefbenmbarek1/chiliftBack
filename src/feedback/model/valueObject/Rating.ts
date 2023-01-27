export class Rating {
    private rating:number;
  constructor(rating:number) {
    if (rating > 5 || rating < 1)
      throw new Error("rating must be between 1 and 5 problem Rating not valid")
    this.rating = rating;
  }
  convertRatingNumberToPhrase() {
    switch (this.rating) {
      case 1: return "hating the app"
      case 2: return "not very satisfied"
      case 3: return "not bad but not great either"
      case 4: return "satisfied but still not perfect"
      case 5: return "very satisfied"
      default:
        return "hating the app"
    }
  }
};

