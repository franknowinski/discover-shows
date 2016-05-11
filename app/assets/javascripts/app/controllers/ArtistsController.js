function ArtistsController(library, $filter, Restangular){
  var ctrl = this;

  ctrl.refilter = function(){
    ctrl.filteredList = $filter('filter')(library.artists, ctrl.search);
  };
  
  ctrl.search;
  ctrl.refilter();
};

angular
  .module('app')
  .controller('ArtistsController', ArtistsController);
