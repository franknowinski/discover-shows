function ArtistController(Artist, $stateParams, ConcertService){
  var ctrl = this;

  Artist.get({id: $stateParams.id}, function(res){
    ctrl.artist = res.artist;
    ctrl.songs = res.artist.songs;
    ctrl.concerts = res.artist.concerts;
  });
};

angular
  .module('app')
  .controller('ArtistController', ArtistController);
