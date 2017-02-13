"use strict";
// untypes
let twilio = require('twilio');
exports.smsHandler = (smsProcessor) => {
    return (request, reply) => {
        console.log(request.payload);
        smsProcessor.addSms(request.payload);
        const twiml = twilio.TwimlResponse();
        twiml.message('Message Accepted');
        console.log(twiml);
        return reply(twiml.toString()).type('text/xml');
    };
};
//# sourceMappingURL=sms-handler.js.map