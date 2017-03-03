"use strict";
const smsParser_1 = require("../smsParser");
// untypes
let twilio = require('twilio');
const extractSMSData = (sms, callback) => {
    let parsedSms = smsParser_1.smsParser.parse(sms);
    callback(parsedSms);
};
exports.smsHandler = (smsProcessor) => {
    return (request, reply) => {
        console.log(request.payload);
        extractSMSData(request.payload, smsProcessor.addSms);
        // smsProcessor.addSms(request.payload);
        const twiml = twilio.TwimlResponse();
        twiml.message('Message Accepted');
        console.log(twiml);
        return reply(twiml.toString()).type('text/xml');
    };
};
//# sourceMappingURL=sms-handler.js.map