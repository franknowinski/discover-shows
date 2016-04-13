function UpcomingConcertsController(items, ConcertService){
  var ctrl = this;

  ctrl.upcomingConcerts = items.data;

  // ctrl.concertArtist = function(){
  //   return ConcertService.getArtist();
  // }

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
