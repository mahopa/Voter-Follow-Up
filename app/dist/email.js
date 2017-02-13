"use strict";
const config_1 = require("./config");
let nodemailer = require('nodemailer');
// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: config_1.conf.get('email.address'),
        pass: config_1.conf.get('email.password')
    }
});
// setup email data with unicode symbols
let mailOptions = {
    from: `"Sender Name" <${config_1.conf.get('email.address')}>`,
    to: config_1.conf.get('email.address'),
    subject: 'Text Enrollment Received',
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
exports.addSms = addSms;
//# sourceMappingURL=email.js.map