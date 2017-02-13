import { conf as config } from './config';
let nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: config.get('email.address'),
        pass: config.get('email.password')
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: `"Sender Name" <${config.get('email.address')}>`, // sender address
    to: config.get('email.address'), // list of receivers
    subject: 'Text Enrollment Received', // Subject line
    text: ''
};

const addSms = (sms) => {
    mailOptions.text = JSON.stringify(sms);
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
};

export { addSms }