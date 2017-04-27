function BrowseConcertsController(artists, $filter){
  var ctrl = this;
  ctrl.artists = artists;

  ctrl.refilter = function(){
    ctrl.filteredList = $filter('filter')(artists, ctrl.search);
  };

  ctrl.search;
  ctrl.refilter();
}

angular
  .module('app')
  .controller('BrowseConcertsController', ['artists', '$filter', BrowseConcertsController]);
