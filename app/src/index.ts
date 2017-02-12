/**
 * Created by alexandermiller on 2/11/17.
 */
import * as Hapi from 'hapi';
import * as requestHandlers from './request-handlers';

const port = 1337;
const server = new Hapi.Server();

server.connection({
    port: port
});

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

server.start(() => {
    console.log(`Server started on port ${port}`);
});

