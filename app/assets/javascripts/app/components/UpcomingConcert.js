var UpcomingConcert = {
  bindings: {
    name: '='
  },
  templateUrl: 'app/views/upcoming_concert.html',
  controller: function(ArtistService, ConcertService){
    var ctrl = this;
    ctrl.concert = this.name;
    ctrl.artist = '';

    ctrl.findArtist = ArtistService.getArtist(this.name.artist_id)
      .then(function(res){
        ctrl.artist = res.data;
      })
  },
  controllerAs: 'artist'
}

angular
  .module('app')
  .component('upcomingConcert', UpcomingConcert)
