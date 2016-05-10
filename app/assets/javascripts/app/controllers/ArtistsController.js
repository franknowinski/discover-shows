function ArtistsController(Artist, Restangular, $cookies, ArtistService){
  var ctrl = this;

  ArtistService.getArtists.then(function(res){
    ctrl.artists = res.artists;
  });

  ctrl.view = true;

  ctrl.changeViewStatus = function(){
    ctrl.view = false;
  };
};

angular
  .module('app')
  .controller('ArtistsController', ArtistsController);
