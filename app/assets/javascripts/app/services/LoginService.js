function LoginService($cookies, $location, Restangular){
  Restangular.setBaseUrl('/api/v1');

  this.login = function(){
    Restangular.one('users').get().then(function(user){
      $cookies.put('id', user.id);
      $cookies.put('name', user.id);
      $cookies.put('email', user.id);
    });
  };

  this.logout = function(id){
    Restangular.one('users', id).remove().then(function(){
      $cookies.remove('id');
      $cookies.remove('name');
      $cookies.remove('email');
      $location.path('login');
    });
  };
};

angular
  .module('app')
  .service('LoginService', LoginService)
