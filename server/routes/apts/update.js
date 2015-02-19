'use strict';

var Apt = require('../../models/apt');

module.exports = {
  handler: function(request, reply) {
    Apt.findByIdAndUpdate(request.params.aptId, request.payload, function() {
      reply.redirect('/apts/' + request.params.aptId);
    });
  }
};
