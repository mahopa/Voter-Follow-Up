"use strict";
const config_1 = require("./config");
const requestHandlers = require("./request-handlers");
const Server = require("./server");
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
    handler: requestHandlers.smsHandler
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