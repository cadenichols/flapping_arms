'use strict';

var active = require('../../views/helpers/active');
var Renter = require('../../models/renter');

module.exports = {
  handler: function(request, reply) {
    Renter.find(function(err, renters) {
      reply.view('templates/renters/index', {path:'/renters', active:active, renters:renters});
    });
  }
};
