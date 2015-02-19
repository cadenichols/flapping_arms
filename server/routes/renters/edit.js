'use strict';

var active = require('../../views/helpers/active');
var Renter = require('../../models/renter');

module.exports = {
  handler: function(request, reply) {
    Renter.findOne({_id:request.params.renterId}, function(err, renter) {
      reply.view('templates/renters/edit', {path:'/renters', active:active, renter:renter});
    });
  }
};
