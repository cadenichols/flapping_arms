'use strict';

var Apt = require('../../models/apt');

module.exports = {
  handler: function(request, reply) {
    var apt = new Apt(request.payload);
    apt.save(function() {
      reply.redirect('/apts');
    });
  }
};
