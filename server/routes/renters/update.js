'use strict';

var Renter = require('../../models/renter');

module.exports = {
  handler: function(request, reply) {
    Renter.findByIdAndUpdate(request.params.renterId, request.payload, function() {
      reply.redirect('/renters/' + request.params.renterId);
    });
  }
};
