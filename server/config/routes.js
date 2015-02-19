'use strict';

module.exports = [
  {method: 'get', path: '/{param*}', config: require('../routes/general/static')},
  {method: 'get', path: '/', config: require('../routes/general/home')},

  {method: 'get', path: '/apts', config: require('../routes/apts/index')},
  {method: 'get', path: '/apts/new', config: require('../routes/apts/new')},
  {method: 'post', path: '/apts', config: require('../routes/apts/create')},
  {method: 'get', path: '/apts/{aptId}', config: require('../routes/apts/show')},
  {method: 'get', path: '/apts/{aptId}/edit', config: require('../routes/apts/edit')},
  {method: 'post', path: '/apts/{aptId}', config: require('../routes/apts/update')},
  {method: 'post', path: '/apts/{aptId}/delete', config: require('../routes/apts/destroy')},

  {method: 'get', path: '/renters', config: require('../routes/renters/index')},
  {method: 'get', path: '/renters/new', config: require('../routes/renters/new')},
  {method: 'post', path: '/renters', config: require('../routes/renters/create')},
  {method: 'get', path: '/renters/{renterId}', config: require('../routes/renters/show')},
  {method: 'get', path: '/renters/{renterId}/edit', config: require('../routes/renters/edit')},
  {method: 'post', path: '/renters/{renterId}', config: require('../routes/renters/update')},
  {method: 'post', path: '/renters/{renterId}/delete', config: require('../routes/renters/destroy')}
];
