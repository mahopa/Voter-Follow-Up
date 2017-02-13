/**
 * Created by alexandermiller on 2/11/17.
 */
import * as Hapi from 'hapi';

import {IProcessSMS} from '../Interfaces/IProcessSMS';

// untypes
let twilio = require('twilio');

export const smsHandler = (smsProcessor: IProcessSMS) => {
    return (request: Hapi.Request, reply: Hapi.IReply) => {
    console.log(request.payload);
    smsProcessor.addSms(request.payload);
    const twiml = twilio.TwimlResponse();
    twiml.message('Message Accepted');
    console.log(twiml);
    return reply(twiml.toString()).type('text/xml');
    };
};
