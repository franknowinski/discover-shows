function ZipService($http, $cookies){

  this.persistZip = function(zipCode){
    return $http.post('/zipcode', {user_id: $cookies.get('id'), zip_code: zipCode});
  }

  this.getUser = function(){
    return $http.get('/user');
  }
}

angular
  .module('app')
  .service('ZipService', ZipService)
