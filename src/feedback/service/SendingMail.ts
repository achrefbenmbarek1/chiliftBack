import nodemailer, { SentMessageInfo } from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kaizakia6@gmail.com',
    pass: 'akkasfrdspkmupgz'
  }
});

export const sendEmail = (content:string)=>{
  
let mailOptions = {
  from: 'kaizakia6@gmail.com',
  to: 'achrefbenmbarek123@gmail.com',
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

