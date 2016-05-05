function Artist($resource) {

  var Artist = $resource('/api/v1/artists/:id/', {artist_id: '@artist_id'}, {
     query: { method: 'GET', isArray: true }
  });

  return Artist;
};

angular
  .module('app')
  .factory('Artist', Artist);

//  get: {method: 'GET', isArray: true },
//  create: { method: 'POST' },
//  update: { method: 'PUT' },
//  delete: { method: 'DELETE' }
