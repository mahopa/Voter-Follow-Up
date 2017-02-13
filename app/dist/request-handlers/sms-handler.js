"use strict";
const emailer = require("../email");
// untypes
let twilio = require('twilio');
exports.smsHandler = (request, reply) => {
    console.log(request.payload);
    emailer.addSms(request.payload);
    const twiml = twilio.TwimlResponse();
    twiml.message('Message Accepted');
    console.log(twiml);
    return reply(twiml.toString()).type('text/xml');
};
//# sourceMappingURL=sms-handler.js.map