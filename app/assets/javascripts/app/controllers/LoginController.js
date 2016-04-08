function LoginController($http, $cookies, ZipService){
  var ctrl = this;

  ctrl.id = '';
  ctrl.name = '';
  ctrl.email = '';

  this.spotifyLogin = ZipService.getUser()
    .then(function(res){
      ctrl.id = res.data.id;
      ctrl.name = res.data.name;
      ctrl.email = res.data.email;

      $cookies.put('id', ctrl.id);
      $cookies.put('name', ctrl.name);
      $cookies.put('email', ctrl.email);
    });
}

angular
  .module('app')
  .controller('LoginController', LoginController);
