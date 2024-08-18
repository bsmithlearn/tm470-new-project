//caution.js
const mongoose = require('mongoose');

//caution schema for storing cautions
const cautionSchema = new mongoose.Schema({

//Account References
mojRef: String,
polRef: String,

// defendant info
forename: String,
surname: String,
dob: Date,
addLineOne: String,
addLineTwo: String,
addLineThree: String,
postcode: String,
homePhone: String,
mobilePhone: String,
email: String,

// police officer info
officerID: String,
officerRankSurname: String,
officerRank: String,
forceID: String,

// offence info
offenceDesc: String,
offenceDate: Date,
offenceLocation: String,

// status
imposedAmt: Number,
paidAmt: Number,
balance: Number,
acctStatus: String
});

module.exports = mongoose.model('Caution', cautionSchema , 'cautions');