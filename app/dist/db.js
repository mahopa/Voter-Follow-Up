"use strict";
// import * as low from 'lowdb';
let low = require('lowdb');
const db = low('db.json');
// Set some defaults if your JSON file is empty
db.defaults({ sms: [] })
    .write();
const addSms = (sms) => {
    db.get('sms')
        .push(sms)
        .write();
};
exports.addSms = addSms;
//# sourceMappingURL=db.js.map