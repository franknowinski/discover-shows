function ArtistsController(artists, $filter){
  var ctrl = this;

  ctrl.refilter = function(){
    ctrl.filteredList = $filter('filter')(artists, ctrl.search);
  };

  ctrl.search;
  ctrl.refilter();
};

angular
  .module('app')
  .controller('ArtistsController', ['artists', '$filter', ArtistsController]);
