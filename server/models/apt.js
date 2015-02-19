'use strict';

var mongoose = require('mongoose');

var aptSchema = mongoose.Schema({
  name: {type: String, required: true},
  bedrooms: {type: Number, required: true},
  rent: {type: Number, required: true},
  sqft: {type: Number, required: true},
  photo: String,
  tenants: [{type: mongoose.Schema.ObjectId, ref: 'Renter'}]
});

module.exports = mongoose.model('Apt', aptSchema);
