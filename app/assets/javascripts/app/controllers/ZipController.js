function ZipController($http, $cookies, ZipService){
  var ctrl = this;

  ctrl.zipCode = '';

  this.getZipCode = function (){
    ctrl.zipCode = this.zip;

    ZipService.persistZip(ctrl.zipCode)
      .then(function(res){
        debugger;
      })
  }
}

angular
  .module('app')
  .controller('ZipController', ZipController);
