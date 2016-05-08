function ArtistController(Artist, $stateParams, ConcertService){
  var ctrl = this;

  Artist.get({id: $stateParams.id}, function(res){
    ctrl.artist = res.artist;
    ctrl.songs = res.artist.songs;
    ctrl.concerts = res.artist.concerts;
  });

  // ctrl.songs = ctrl.artist.artist.songs;

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
