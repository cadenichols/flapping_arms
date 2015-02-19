'use strict';

var active = require('../../views/helpers/active');
var Apt = require('../../models/apt');

module.exports = {
  handler: function(request, reply) {
    Apt.find(function(err, apts) {
      reply.view('templates/apts/index', {path:'/apts', active:active, apts:apts});
    });
  }
};
