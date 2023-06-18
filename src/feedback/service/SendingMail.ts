import nodemailer, { SentMessageInfo } from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

export const sendEmail = (content:string)=>{
  
let mailOptions = {
  from: process.env.EMAIL,
  to: process.env.RECIPIENT,
  subject: 'feedback',
  text: content
};

transporter.sendMail(mailOptions, function(error:Error | null, info:SentMessageInfo):void{
  if (error) {
    console.log(error);
    throw Error("a problem occured while sending the feedback")
  } else {
    console.log('Email sent: ' + info.response);
  }
});
};

