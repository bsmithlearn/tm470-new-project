//caution.js
const mongoose = require('mongoose');

//caution schema for storing cautions
const cautionSchema = new mongoose.Schema({
name: String,
email: String,
contact: String,
address : String
});

module.exports = mongoose.model('Caution', cautionSchema , 'cautions');