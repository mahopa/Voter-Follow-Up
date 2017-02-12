/**
 * Created by alexandermiller on 2/11/17.
 */
import * as Hapi from 'hapi';
// import * as twilio from 'twilio';
import * as db from '../db';
// untypes
let twilio = require('twilio');

export const smsHandler = (request: Hapi.Request, reply: Hapi.IReply) => {
    console.log(request.payload);
    db.addSms(request.payload);
    const twiml = twilio.TwimlResponse();
    twiml.message('Message Accepted');
    console.log(twiml);
    return reply(twiml.toString()).type('text/xml');
};
