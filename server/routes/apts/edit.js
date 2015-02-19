'use strict';

var active = require('../../views/helpers/active');
var Apt = require('../../models/apt');

module.exports = {
  handler: function(request, reply) {
    Apt.findOne({_id:request.params.aptId}, function(err, apt) {
      reply.view('templates/apts/edit', {path:'/apts', active:active, apt:apt});
    });
  }
};
