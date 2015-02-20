'use strict';

module.exports = function(renter) {
  if (renter.home) {
    return false;
  } else {
    return true;
  }
};
