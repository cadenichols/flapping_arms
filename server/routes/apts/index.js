'use strict';

var active = require('../../views/helpers/active');
var Apt = require('../../models/apt');
var vacancies = require('../../views/helpers/vacancies');

module.exports = {
  handler: function(request, reply) {
    Apt.find(function(err, apts) {
      reply.view('templates/apts/index', {path:'/apts', vacancies:vacancies, active:active, apts:apts});
    });
  }
};
