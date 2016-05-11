function ArtistController(library){
  var ctrl = this;
  ctrl.artist = library.artist;
  ctrl.songs = library.artist.songs;
  ctrl.concerts = library.artist.concerts;
};

angular
  .module('app')
  .controller('ArtistController', ArtistController);
