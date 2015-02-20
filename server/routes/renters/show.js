'use strict';

var active = require('../../views/helpers/active');
var isHomeless = require('../../views/helpers/isHomeless');

var Renter = require('../../models/renter');
var Apt = require('../../models/apt');

module.exports = {
  handler: function(request, reply) {
    Renter.findOne({_id:request.params.renterId}, function(err, renter) {
      if(!isHomeless(renter)) {
        Apt.findOne({_id:renter.home}, function(err, apt) {
          var aptName = apt.name;
          reply.view('templates/renters/show', {path:'/renters', isHomeless:isHomeless, active:active, aptName:aptName, apt:apt, renter:renter});
        });
      } else {
        reply.view('templates/renters/show', {path:'/renters', isHomeless:isHomeless, active:active, renter:renter});
      }
    });
  }
};
