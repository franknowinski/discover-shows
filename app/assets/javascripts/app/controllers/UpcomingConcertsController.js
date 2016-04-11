function UpcomingConcertsController(ConcertService){
  var ctrl = this;

  ctrl.upcomingConcerts = '';

  ctrl.getUpcomingConcerts = ConcertService.getUpcomingConcerts()
    .then(function(res){
      ctrl.upcomingConcerts = res.data;
    });

  ctrl.removeConcert = function(index){
    var concert = ctrl.upcomingConcerts[index];
    ConcertService.removeUpcomingConcert(concert.id)
      .then(function(res){
        ctrl.upcomingConcerts.splice(index,1);
      })
  };
}

angular
  .module('app')
  .controller('UpcomingConcertsController', UpcomingConcertsController);
