/**
 * Created by alexandermiller on 2/11/17.
 */
import * as Hapi from 'hapi';
import * as requestHandlers from './request-handlers';
import * as Server from './server';

const port = 1337;
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

