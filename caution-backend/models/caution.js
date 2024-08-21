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
       required: true
    },

    // defendant info   
    forename: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20,
        trim: true
    },
    surname: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20,
        trim: true
    },
    dob: {
        type: Date,
        required:true
    },
    addLineOne: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50,
        trim: true
    },
    addLineTwo: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50,
        trim: true
    },
    addLineThree: {
        type: String,
        maxLength: 50,
        trim: true
    },
    postcode: {
        type: String,
        required: true,
        maxLength: 10,
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
        required: true,
        maxLength: 10,
        trim: true
    },
    officerRankSurname: {
        type: String,
        required: true,
        maxLength: 30,
        trim: true
    },
    forceID: {
        type: String,
        required: true,
        maxLength: 2,
    },

    // offence info
    offenceDesc: {
        type: String,
        required: true,
        maxLength: 100,
        trim: true
    },
    offenceDate: {
        type: Date,
        required: true,
    },
    offenceLocation: {
        type: String,
        required: true,
        maxLength: 50,
        trim: true
    },

    // status
    imposedAmt: {
        type: Number,
        required: true,
        min: 1,
    },
    paidAmt: {
        type: Number,
        required: true,
    },
    balance: {
        type: Number,
        required: true,
    },
    acctStatus: {
        type: String,
        required: true,
        maxLength: 100,
        trim: true
    },
});

module.exports = mongoose.model('Caution', cautionSchema , 'cautions');