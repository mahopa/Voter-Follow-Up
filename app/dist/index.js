"use strict";
/**
 * Created by alexandermiller on 2/11/17.
 */
const config_1 = require('./config');
const requestHandlers = require('./request-handlers');
const Server = require('./server');
const emailer = require('./email');
const port = config_1.conf.get('port');
const server = Server.init(port);
server.route({
    method: 'GET',
    path: '/',
    handler: requestHandlers.indexHandler
});
server.route({
    method: 'POST',
    path: '/sms',
    handler: requestHandlers.smsHandler(emailer)
});
server.route({
    method: 'GET',
    path: '/healthcheck',
    handler: requestHandlers.healthCheckHandler
});
server.start(() => {
    console.log(`Server started on port ${port}`);
});
//# sourceMappingURL=index.js.map