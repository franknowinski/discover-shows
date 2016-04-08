function ZipController($http, $cookies, $location, ZipService){
  var ctrl = this;
  ctrl.zipCode = '';

  this.getZipCode = function (){
    ctrl.zipCode = this.zip;

    ZipService.persistZip(ctrl.zipCode);
    $location.path('/artists');
  }
}

angular
  .module('app')
  .controller('ZipController', ZipController);
