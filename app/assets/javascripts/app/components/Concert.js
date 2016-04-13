var Concert = {
  bindings: {
    name: '='
  },
  templateUrl: 'app/views/concert.html',
  controller: function(ConcertService){
    var ctrl = this;

    ctrl.concert = this.name;

    ctrl.addConcert = function(){
      ConcertService.addUpcomingConcert(this.concert.id);
    };
  },
  controllerAs: 'artist'
}

angular
  .module('app')
  .component('concert', Concert);
