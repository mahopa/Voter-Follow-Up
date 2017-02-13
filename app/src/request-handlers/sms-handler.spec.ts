/**
 * Created by alexandermiller on 2/11/17.
 */
import * as chai from 'chai';
import * as RequestHandlers from './index';
import {Request} from 'hapi';
import {IProcessSMS} from '../Interfaces/IProcessSMS';

const assert = chai.assert;

let outputObject = {
    reply: null,
    type: null
};

let mockReply: any = (reply) => {
  mockReply.result.reply = reply;
  return mockReply;
};

mockReply.type = (type) => {
    mockReply.result.type = type;
};

mockReply.result = {
};

let mockRequest: Request = {
    app: null,
    auth: null,
    connection: null,
    domain: null,
    headers: null,
    id: null,
    info: null,
    method: null,
    mime: null,
    orig: null,
    params: null,
    paramsArray: null,
    path: null,
    payload: null,
    plugins: null,
    pre: null,
    response: null,
    preResponses: null,
    query: null,
    raw: null,
    route: null,
    server: null,
    state: null,
    url: null,
    setUrl: null,
    setMethod: null,
    log: null,
    getLog: null,
    tail: null,
    addListener: null,
    on: null,
    once: null,
    prependListener: null,
    prependOnceListener: null,
    removeAllListeners: null,
    removeListener: null,
    setMaxListeners: null,
    getMaxListeners: null,
    listenerCount: null,
    listeners: null,
    emit: null,
    eventNames: null
};

let mockSMSProcessor: IProcessSMS = {
    addSms: (payload) => {
        // do nothing
    }
};

describe('SMS handler', () => {
    it('Sets the type to xml', function() {
        console.log(outputObject);
       RequestHandlers.smsHandler(mockSMSProcessor)(mockRequest, mockReply);
       assert.isNotNull(mockReply.result.type, 'Type should not be null');
       assert.equal(mockReply.result.type, 'text/xml');
    });

    it('Sends a reply', () => {
      RequestHandlers.smsHandler(mockSMSProcessor)(mockRequest, mockReply);
      assert.isNotNull(mockReply.result.reply, 'Reply should not be empty');
    });

});