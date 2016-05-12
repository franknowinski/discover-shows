function ArtistController(library, ArtistService){
  var ctrl = this;
  ctrl.artist = library.artist;
  ctrl.songs = library.artist.songs;
  ctrl.concerts = library.artist.concerts;
  ctrl.showPopularityForm = false;
  if (ctrl.concerts.length > 0){ ctrl.hasConcerts = true; }

  ctrl.editPopularity = function(){
    ArtistService.updatePopularity(this.artist)
      .then(function(){
        ctrl.showPopularityForm = false;
      });
  }
};

angular
  .module('app')
  .controller('ArtistController', ArtistController);
