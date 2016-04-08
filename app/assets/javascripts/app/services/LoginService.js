function LoginService($http, $cookies){
  this.getUser = function(){
    return $http.get('/user');
  }
}

angular
  .module('app')
  .service('LoginService', LoginService)
