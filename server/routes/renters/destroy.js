'use strict';

var Renter = require('../../models/renter');

module.exports = {
  handler: function(request, reply) {
    Renter.remove({_id:request.params.renterId}, function() {
      reply.redirect('/renters');
    });
  }
};