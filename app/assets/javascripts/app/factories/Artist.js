function Artist($resource) {
  return $resource('/api/v1/artists/:id/', {artist_id: '@artist_id'}, {
     query: { method: 'GET', isArray: true },
     get: { method: 'GET' }
  });
};

angular
  .module('app')
  .factory('Artist', Artist);

//  get: {method: 'GET', isArray: true },
//  create: { method: 'POST' },
//  update: { method: 'PUT' },
//  delete: { method: 'DELETE' }
