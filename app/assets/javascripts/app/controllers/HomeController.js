function HomeController($cookies, $location, LoginService, User){
  var ctrl = this;

  ctrl.user = User.get();
  
  ctrl.logoutUser = function(){
    LoginService.signOutUser($cookies.get('id'));

    $location.path('/login')
  };
}

angular
  .module('app')
  .controller('HomeController', HomeController);
