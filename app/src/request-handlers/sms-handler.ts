/**
 * Created by alexandermiller on 2/11/17.
 */
import * as Hapi from 'hapi';

import * as emailer from '../email';
// untypes
let twilio = require('twilio');

export const smsHandler = (request: Hapi.Request, reply: Hapi.IReply) => {
    console.log(request.payload);
    emailer.addSms(request.payload);
    const twiml = twilio.TwimlResponse();
    twiml.message('Message Accepted');
    console.log(twiml);
    return reply(twiml.toString()).type('text/xml');
};
