function HomeController($cookies, LoginService){
  var ctrl = this;

  LoginService.login();

  ctrl.logoutUser = function() {
    LoginService.logout($cookies.get('id'));
  };
}

angular
  .module('app')
  .controller('HomeController', HomeController);
