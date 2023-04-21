export class Height {
    private height:string;
    private heightRegex:RegExp =/^\d{3}$/;
  constructor(height:string) {
    if (!this.heightRegex.test(height))
      throw new Error("please provide a valid height in cm");
    this.height = height;
  }
};

