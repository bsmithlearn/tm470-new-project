//caution.js
const mongoose = require('mongoose');

//caution schema for storing cautions
const cautionSchema = new mongoose.Schema({

//Account References
    mojRef: { 
        type: String,
        match: /^[0-9]{7}[A-Z]$/
         // MOJ ref is 7 digits followed by a capital letter. e.g. 1234567A
    },
    polRef: {
       type: String, 
       match: /^[0-9]{2}\/[A-Z]{2}\/[0-9]{5}\/[0-9]{2}$/,
       // police ref is 2digits / 2 capital letters / 5 digits / 2 digits e.g. 01/AB/23456/78
       required: [true, 'The police reference is required'],
    },

    // defendant info   
    forename: {
        type: String,
        required: [true, 'A forename is required'],
        minLength: [3,'Forename is too short, min 3'],
        maxLength: [20,'Forename is too long, max 20'],
        trim: true
    },
    surname: {
        type: String,
        required: [true, 'A surname is required'],
        minLength: [3,'Surname is too short, min 3'],
        maxLength: [20,'Surname is too long, max 20'],
        trim: true
    },
    dob: {
        type: String,
        match: /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/,
         // DOB DD/MM/YYYY
        required: [true, 'A date of birth is required'],
    },
    addLineOne: {
        type: String,
        required: [true, 'Address Line One is required'],
        minLength: [3,'Surname is too short, min 3'],
        maxLength: [50,'Surname is too long, max 50'],
        trim: true
    },
    addLineTwo: {
        type: String,
        required: [true, 'Address Line Two is required'],
        minLength: [3,'Address Line Two too short, min 3'],
        maxLength: [50,'Address Line Two too long, max 50'],
        trim: true
    },
    addLineThree: {
        type: String,
        maxLength: [50,'Address Line Three is too long, max 50'],
        trim: true
    },
    postcode: {
        type: String,
        required: [true, 'The postcode is required'],
        maxLength: [10,'Postcode too long, max 10'],
        trim: true
    },
    homePhone: {  
    type: String,
    match: /^(?:0|\+?44)(?:\d\s?){9,10}$/
    // home telephone regex 
    },
    mobilePhone: {  
        type: String,
        match: /^(?:0|\+?44)[7]\d\s?(?:\d\s?){7,8}$/
        // mobile telephone regex 
        },
    email: { 
        type: String,
        match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,5})$/
        // regular email format e.g. mickey.mouse@disney.com
    },

    // police officer info
    officerID: {
        type: String,
        required: [true, 'The officer ID is required'],
        maxLength: [10,'Officer ID too long, max 10'],
        trim: true
    },
    officerRankSurname: {
        type: String,
        required: [true, 'The officers Rank and Surname is required'],
        maxLength: [30,'Officer Rank and Surname too long, max 30'],
        trim: true
    },
    forceID: {
        type: String,
        required: [true, 'The force ID is required'],
        maxLength: [2,'Force ID too long, max 2'],
    },

    // offence info
    offenceDesc: {
        type: String,
        required: [true, 'The offence description is required'],
        maxLength: [100,'Offence description too long, max 100'],
        trim: true
    },
    offenceDate: {
        type: String,
        match: /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/,
         // Offence date DD/MM/YYYY
        required: [true, 'The offence date is required'],
    },
    offenceLocation: {
        type: String,
        required: [true, 'The offence location is required'],
        maxLength: [50,'Offence location too long, max 50'],
        trim: true
    },

    // status
    imposedAmt: {
        type: Number,
        required: [true, 'The imposed amount is required'],
    },
    paidAmt: {
        type: Number,
        required: [true, 'Paid amount required, enter 0 if nothing paid'],
    },
    balance: {
        type: Number,
        required: [true, 'The balance is required'],
    },
    acctStatus: {
        type: String,
        required: [true, 'Acct Status required '],
        maxLength: [100,'Acct Status is too long, max 100'],
        trim: true
    },
});

module.exports = mongoose.model('Caution', cautionSchema , 'cautions');