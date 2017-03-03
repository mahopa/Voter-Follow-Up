[![Build Status](https://travis-ci.org/mahopa/Voter-Follow-Up.svg?branch=master)](https://travis-ci.org/mahopa/Voter-Follow-Up)

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


## Ideas


Meeting Notes: 2/27/2017

    Follow up questions with users

    - Early Voting

    Candidate conversations & debates

    Ballot by mail -> Application & Return

    Which of these would you like reminders for

        Committees & Meetings and State Issues

    Email
        5 minute survey, voter guide, candidate, early, regular voting & power user


    System Integrations
        Action Network => CRM for voter information
        CSV
    
    Needs tp be deployable independenty
        System deployable to different locations
        Seperate Calendars

    MVP Ideas
    
    City of Pasedena => Voter turn out

    MVP City of Pasedena