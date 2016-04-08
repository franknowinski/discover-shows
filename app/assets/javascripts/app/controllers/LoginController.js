function LoginController($http, $cookies, $location, LoginService){
  var ctrl = this;

  ctrl.id = '';
  ctrl.name = '';
  ctrl.email = '';

  this.spotifyLogin = LoginService.getUser()
    .then(function(res){
      ctrl.id = res.data.id;
      ctrl.name = res.data.name;
      ctrl.email = res.data.email;

      $cookies.put('id', ctrl.id);
      $cookies.put('name', ctrl.name);
      $cookies.put('email', ctrl.email);

      $location.path('/zipcode');
    });
}

angular
  .module('app')
  .controller('LoginController', LoginController);
