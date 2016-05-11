function BrowseConcertsController(artists, $filter){
  var ctrl = this;

  ctrl.refilter = function(){
    ctrl.filteredList = $filter('filter')(artists.concerts, ctrl.search);
  };

  ctrl.search;
  ctrl.refilter();
}

angular
  .module('app')
  .controller('BrowseConcertsController', BrowseConcertsController);
