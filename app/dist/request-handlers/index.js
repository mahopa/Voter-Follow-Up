"use strict";
exports.indexHandler = (request, reply) => {
    console.log('Get Request');
    console.log(request);
    reply(`Yep it's a server`);
};
exports.healthCheckHandler = (request, reply) => {
    return reply(200);
};
var sms_handler_1 = require('./sms-handler');
exports.smsHandler = sms_handler_1.smsHandler;
//# sourceMappingURL=index.js.map