'use strict';

module.exports = function(apartment) {
  return apartment.bedrooms - apartment.tenants.length;
};
