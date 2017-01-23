function HomeController(library, $cookies, LoginService){
  var ctrl = this;
  ctrl.topArtist = library[0];

  LoginService.login();

  ctrl.logoutUser = function() {
    LoginService.logout($cookies.get('id'));
  };
}

angular
  .module('app')
  .controller('HomeController', ['library', '$cookies', 'LoginService', HomeController]);
