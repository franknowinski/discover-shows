function HomeController($cookies, $location, LoginService, User, Restangular){
  var ctrl = this;

  ctrl.logoutUser = function(){
    LoginService.signOutUser($cookies.get('id'));

    $location.path('/login')
  };

  ctrl.view = true;
}

angular
  .module('app')
  .controller('HomeController', HomeController);
