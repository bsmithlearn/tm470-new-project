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
homePhone: Number,
mobilePhone: Number,
email: String,

// police officer info
officerID: String,
officerSurname: String,
officerRank: String,
forceID: Number,

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