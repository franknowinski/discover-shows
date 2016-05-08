function Concert($resource) {
  return $resource('/api/v1/user/:user_id/upcoming_concerts/:id', {user_id: '@user_id', id: '@upcoming_concerts' }, {
     query: { method: 'GET' }
    //  get: { method: 'GET' }
  });
};

angular
  .module('app')
  .factory('Concert', Concert);


// $http.get('/user/' + user_id + '/upcoming_concerts');
