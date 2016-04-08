function HomeController($cookies, $location, LoginService){
  this.logoutUser = function(){
    LoginService.signOutUser($cookies.get('id'));

    $location.path('/login')
  };

}

angular
  .module('app')
  .controller('HomeController', HomeController);
