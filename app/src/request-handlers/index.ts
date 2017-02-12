import * as smsHandler from './sms-handler';
import * as Hapi from 'hapi';

export const indexHandler = (request: Hapi.Request, reply: Hapi.IReply) => {
    console.log('Get Request');
    console.log(request);
    reply(`Yep it's a server`);
};

export const healthCheckHandler = (request: Hapi.Request, reply: Hapi.IReply) => {
    return reply(200);
}

export { smsHandler } from './sms-handler';