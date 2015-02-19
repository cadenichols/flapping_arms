'use strict';

var Apt = require('../../models/apt');

module.exports = {
  handler: function(request, reply) {
    Apt.remove({_id:request.params.aptId}, function() {
      reply.redirect('/apts');
    });
  }
};