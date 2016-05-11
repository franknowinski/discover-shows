var UpcomingConcert = {
  bindings: {
    concert: '='
  },
  templateUrl: 'app/views/upcoming_concert.html',
  controller: function(){
    this.show = this.concert;
  },
  controllerAs: 'artist'
}

angular
  .module('app')
  .component('upcomingConcert', UpcomingConcert)
