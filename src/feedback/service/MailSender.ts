import nodemailer from 'nodemailer';


async function sendMail(feedbackTextContent:string, feedbackHtmlContent:string) {
  try {
    const SENDER = process.env.RECIPIENT
    const RECIPIENT = process.env.SENDER
    const PASSWORD = process.env.PASSWORD
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: SENDER,
        pass: PASSWORD
      },
    } as nodemailer.TransportOptions);

    const mailOptions: nodemailer.SendMailOptions = {
      from: `SENDER NAME <${SENDER}>`,
      to: RECIPIENT,
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


