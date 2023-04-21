export class PhoneNumber {
    private phoneNumber:string;
    private phoneNumberRegex:RegExp =/^[0-9]{8}$/;
  constructor(phoneNumber:string) {
    if (!this.phoneNumberRegex.test(phoneNumber))
      throw new Error("please provide a valid phone number");
    this.phoneNumber = phoneNumber;
  }
};


