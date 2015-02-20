'use strict';

var Renter = require('../../models/renter');
var Apt = require('../../models/apt');

module.exports = {
  handler: function(request, reply) {
    Renter.findOne({_id:request.params.renterId}, function(err, renter) {
      Apt.findOne({_id:renter.home}, function(err, apt) {
        apt.tenants.splice(apt.tenants.indexOf(renter.home),1);
        renter.home = null;
        renter.save(function() {
          apt.save(function() {
            reply.redirect('/renters/' + renter._id);
          });
        });
      });
    });
  }
};
