function ZipService($http, $cookies){
  this.persistZip = function(zipCode){
    return $http.post('/zipcode', {user_id: $cookies.get('id'), zip_code: zipCode});
  }
}

angular
  .module('app')
  .service('ZipService', ZipService)
