function BrowseConcertsController(artists, $filter){
  var ctrl = this;
  debugger
  ctrl.artists = artists.concerts;

  ctrl.refilter = function(){
    ctrl.filteredList = $filter('filter')(artists.concerts, ctrl.search);
  };

  ctrl.search;
  ctrl.refilter();
}

angular
  .module('app')
  .controller('BrowseConcertsController', ['artists', '$filter', BrowseConcertsController]);
