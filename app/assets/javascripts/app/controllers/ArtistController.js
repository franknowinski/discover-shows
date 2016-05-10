function ArtistController($stateParams, ArtistService){
  var ctrl = this;

  ArtistService.getArtist($stateParams.id).then(function(res){
    ctrl.artist = res.artist;
    ctrl.songs = res.artist.songs;
    ctrl.concerts = res.artist.concerts;
  });
};

angular
  .module('app')
  .controller('ArtistController', ArtistController);
