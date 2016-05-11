function ArtistController(library, ArtistService){
  var ctrl = this;
  ctrl.artist = library.artist;
  ctrl.songs = library.artist.songs;
  ctrl.concerts = library.artist.concerts;

  ctrl.showPopularityForm = false;

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
