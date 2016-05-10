var UpcomingConcert = {
  bindings: {
    concert: '='
  },
  templateUrl: 'app/views/upcoming_concert.html',
  controller: function(ConcertService){
    var ctrl = this;
    ctrl.artist = this.concert.artist;
    ctrl.concert = this.concert.concert;
  },
  controllerAs: 'artist'
}

angular
  .module('app')
  .component('upcomingConcert', UpcomingConcert)
