'use strict';

var active = require('../../views/helpers/active');

module.exports = {
  handler: function(request, reply) {
    reply.view('templates/apts/new', {path:'/apts', active:active});
  }
};
