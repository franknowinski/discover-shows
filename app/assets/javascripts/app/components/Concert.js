var Concert = {
  bindings: {
    concert: '='
  },
  templateUrl: 'app/views/concert.html',
  controller: function(ConcertService){
    var ctrl = this;

    ctrl.addConcert = function(){
      ConcertService.addUpcomingConcert(this.concert.id);
      ctrl.attending = true;
    };

    ConcertService.getUpcomingConcerts.then(function(res){
      ctrl.attending = res.upcoming_concerts.some(function(concert){
        return ctrl.concert.id == concert.concert.id
      });
    });
  },
  controllerAs: 'artist'
}

angular
  .module('app')
  .component('concert', Concert);
