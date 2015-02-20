'use strict';

var active = require('../../views/helpers/active');
var vacancies = require('../../views/helpers/vacancies');
var isHomeless = require('../../views/helpers/isHomeless');

var Apt = require('../../models/apt');
var Renter = require('../../models/renter');

module.exports = {
  handler: function(request, reply) {
    Apt.findOne({_id:request.params.aptId}, function(err, apt) {
      Renter.find(function(err, renters) {
        reply.view('templates/apts/show', {path:'/apts', active:active, isHomeless:isHomeless, vacancies:vacancies, renters:renters, apt:apt});
      });
    });
  }
};
