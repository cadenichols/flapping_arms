'use strict';

var Renter = require('../../models/renter');
var Apt = require('../../models/apt');
var active = require('../../views/helpers/active');
var vacancies = require('../../views/helpers/vacancies');

module.exports = {
  handler: function(request, reply) {
    Renter.find(function(err, renters) {
      Apt.find(function(err, apts) {
        var totalRooms = 0;
        var occupiedRooms = 0;
        var revenue = 0;
        var fullApts = 0;

        apts.forEach(function(a) {
          if(a.bedrooms === a.tenants.length) {
            fullApts++;
          }
          totalRooms += a.bedrooms;
          occupiedRooms += a.tenants.length;
          revenue += a.tenants.length * a.rent;
        });

        reply.view('templates/admin/main', {
          path:'/admin',
          vacancies:vacancies,
          active:active,
          renters:renters,
          apts:apts,
          fullApts:fullApts,
          revenue:revenue,
          totalRooms:totalRooms,
          occupiedRooms:occupiedRooms
        });
      });
    });
  }
};