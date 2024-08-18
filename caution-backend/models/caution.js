//caution.js
const mongoose = require('mongoose');

//caution schema for storing cautions
const cautionSchema = new mongoose.Schema({

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
imposedAmt: mongoose.Types.Decimal128,
paidAmt: mongoose.Types.Decimal128,
balance: mongoose.Types.Decimal128,
acctStatus: String
});

module.exports = mongoose.model('Caution', cautionSchema , 'cautions');