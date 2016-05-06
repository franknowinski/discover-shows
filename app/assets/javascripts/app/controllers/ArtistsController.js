function ArtistsController(Artist, $filter, $cookies){
  var ctrl = this;
  ctrl.artists = Artist.query();
  ctrl.search;
  
  ctrl.refilter = function(){
    ctrl.filteredList = $filter('filter')(ctrl.artists, ctrl.search);
  };
  ctrl.refilter();

  ctrl.view = true;

  ctrl.changeViewStatus = function(){
    ctrl.view = false;
  }
}

angular
  .module('app')
  .controller('ArtistsController', ArtistsController);
