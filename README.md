# Voter-Follow-Up
Tool to help follow up with voters after registration

## Overview
App lets voters opt-in via SMS to communications at voter registration drives

### Process Flow

- User register to vote and sees placard
- User sends text to {app-sms-number} with {user-email}
- Twilio magic
- App captures {user-email} {user-phone}
- Stores info (Db?, Forward directly to org?)
- App sends text confirmation to {user-phone}
- Twilio magic
- User gets SMS confirmation
- ...time...
- LWV follows up via outside channel

## References
[Project Idea on Sketch City] (https://github.com/sketch-city/project-ideas/issues/66)

[Twilio Node Quickstart](https://www.twilio.com/docs/quickstart/node/programmable-sms)
