import nodemailer from 'nodemailer';
import { google } from 'googleapis';

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail(feedbackTextContent:string, feedbackHtmlContent:string) {
  try {
    console.log(process.env.REFRESH_TOKEN)
    console.log("mail yeh dik 1")
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.SENDER,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    } as nodemailer.TransportOptions);

    const mailOptions: nodemailer.SendMailOptions = {
      from: `SENDER NAME <${process.env.SENDER}>`,
      to: process.env.RECIPIENT,
      subject: 'feedback',
      text:feedbackTextContent,
      html: feedbackHtmlContent,
    };

    console.log("mail yeh dik")
    const result = await transport.sendMail(mailOptions);
    console.log("t3adit")
    return result;
  } catch (error) {
    console.log(error)
    return error;
  }
}

export { sendMail };

