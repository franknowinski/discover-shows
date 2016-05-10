function ArtistsController($filter, $cookies, ArtistService, Restangular){
  var ctrl = this;

  ctrl.refilter = function(){
    ArtistService.getArtists.then(function(res){
      ctrl.filteredList = $filter('filter')(res.artists, ctrl.search);
    });
  };

  ctrl.search;
  ctrl.refilter();
};

angular
  .module('app')
  .controller('ArtistsController', ArtistsController);
