'use strict';

var Apt = require('../../models/apt');
var Renter = require('../../models/renter');
var vacancies = require('../../views/helpers/vacancies');

module.exports = {
  handler: function(request, reply) {
    Apt.findById(request.params.aptId, function(err, apt){
      Renter.findById(request.payload.renterId, function(err, renter){
        apt.tenants.push(renter._id);
        renter.home = apt._id;
        apt.save(function(){
          renter.save(function(){
            if(vacancies(apt)) {
              reply.redirect('/apts/' + apt._id);
            } else {
              reply.redirect('/apts');
            }
          });
        });
      });
    });
  }
};
