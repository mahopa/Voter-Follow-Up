/**
 * Created by alexandermiller on 2/11/17.
 */
import * as Hapi from "hapi";
import * as twilio from "twilio";

const port = 1337;
const server = new Hapi.Server();

server.connection({
    port: port
});

server.route({
   method:'GET',
    path:'/',
    handler: (request: Hapi.Request, reply: Hapi.IReply)=> {
       console.log('Get Request');
       console.log(request);
       reply(`Yep it's a server`);
   }
});

server.route({
    method:'POST',
    path:'/sms',
    handler: (request: Hapi.Request, reply: Hapi.IReply) => {
        //console.log(request);
        console.log(request.payload);
        const twiml = twilio.TwimlResponse();
        twiml.message('Message Accepted');
        console.log(twiml);
        return reply(twiml.toString()).type('text/xml');
    }
});

/*
*app.post('/sms', function(req, res) {
 var twilio = require('twilio');
 var twiml = new twilio.TwimlResponse();
 twiml.message('The Robots are coming! Head for the hills!');
 res.writeHead(200, {'Content-Type': 'text/xml'});
 res.end(twiml.toString());
 });
* */

server.start(()=>{
    console.log(`Server started on port ${port}`);
})

