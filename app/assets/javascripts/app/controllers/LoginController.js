function LoginController($http, $cookies, $location, LoginService){
  this.spotifyLogin = LoginService.getUser()
    .then(function(res){
      $cookies.put('id', res.data.id);
      $cookies.put('name', res.data.name);
      $cookies.put('email', res.data.email);
      
      $location.path('/');
    });
}

angular
  .module('app')
  .controller('LoginController', LoginController);
