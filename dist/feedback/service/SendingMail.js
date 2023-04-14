"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: 'kaizakia6@gmail.com',
        pass: 'akkasfrdspkmupgz'
    }
});
const sendEmail = (content) => {
    let mailOptions = {
        from: 'kaizakia6@gmail.com',
        to: 'achrefbenmbarek123@gmail.com',
        subject: 'feedback',
        text: content
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            throw Error("a problem occured while sending the feedback");
        }
        else {
            console.log('Email sent: ' + info.response);
        }
    });
};
exports.sendEmail = sendEmail;
