function ArtistController(Artist, $stateParams, ConcertService){
  var ctrl = this;
  ctrl.artist = Artist.get({id: $stateParams.id});

  // ctrl.songs = ctrl.artist.artist.songs;

  console.log(ctrl.artist)
  console.log(ctrl.artist.artist)

  // this.artist = item.data;
  // this.songs = tracks.data.splice(0, 10);
  // this.concerts = events.data;

  // this.noUpcomingConcerts = function(){
  //   return this.concerts.length === 0;
  // };
}

angular
  .module('app')
  .controller('ArtistController', ArtistController);
