function LoginService($http, $cookies){
  this.getUser = function(){
    return $http.get('/user');
  }

  this.signOutUser = function(id){
    return $http.delete('/user/' + id)
      .then(function(){
        $cookies.remove('id');
        $cookies.remove('name');
        $cookies.remove('email');
      });
  }
}

angular
  .module('app')
  .service('LoginService', LoginService)
