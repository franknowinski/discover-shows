var Concert = {
  bindings: {
    concert: '='
  },
  templateUrl: 'app/views/concert.html',
  controller: function($cookies, ConcertService){
    var ctrl = this;

    ctrl.addConcert = function(){
      ConcertService.addUpcomingConcert(this.concert.id);
      ctrl.attending = true;
    };
  },
  controllerAs: 'artist'
}

angular
  .module('app')
  .component('concert', Concert);
