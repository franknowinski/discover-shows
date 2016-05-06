function User($resource) {

  return $resource('/api/v1/users/', {id: '@_id'}, {
     get: { method: 'GET' }
  });
};

angular
  .module('app')
  .factory('User', User);
