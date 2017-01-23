function ArtistController(artist, ArtistService){
  var ctrl = this;
  ctrl.artist = artist
  ctrl.songs = artist.songs;
  ctrl.concerts = artist.concerts;
  ctrl.showPopularityForm = false;
  if (ctrl.concerts.length > 0){ ctrl.hasConcerts = true; };

  ctrl.editPopularity = function(){
    ArtistService.updatePopularity(this.artist)
      .then(function(){
        ctrl.showPopularityForm = false;
      });
  };
};

angular
  .module('app')
  .controller('ArtistController', ['library', 'ArtistService', ArtistController]);
