function ArtistController(item, tracks, events, ConcertService){
  this.artist = item.data;
  this.songs = tracks.data.splice(0, 10);
  this.concerts = events.data;

  this.noUpcomingConcerts = function(){
    return this.concerts.length === 0;
  };

  this.addConcert = function(index){
    var concert_id = this.concerts[index].id;
    ConcertService.addUpcomingConcert(concert_id);
  };
}

angular
  .module('app')
  .controller('ArtistController', ArtistController);
