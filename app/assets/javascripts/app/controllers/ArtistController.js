function ArtistController(item, tracks, events){
  this.artist = item.data;
  this.songs = tracks.data.splice(0, 10);
  this.concerts = events.data;

  this.noUpcomingConcerts = function(){
    return this.concerts.length === 0;
  }
}

angular
  .module('app')
  .controller('ArtistController', ArtistController);
