'use strict';

var mongoose = require('mongoose');

var renterSchema = mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    gender: {type: String, required: true},
    photo: String,
    home: {type: mongoose.Schema.ObjectId, default: null, ref: 'Apt'}
});

module.exports = mongoose.model('Renter', renterSchema);
