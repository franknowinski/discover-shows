function UpcomingConcertsController($scope, ArtistService){
  var ctrl = this;

  ctrl.upcomingConcerts = '';

  ctrl.getUpcomingConcerts = ArtistService.getUpcomingConcerts()
    .then(function(res){
      ctrl.upcomingConcerts = res.data;
    });

  ctrl.removeConcert = function(index){
    var concert = ctrl.upcomingConcerts[index];
    ArtistService.removeUpcomingConcert(concert.id)
      .then(function(res){
        ctrl.upcomingConcerts.splice(index,1);
      })
  };
}

angular
  .module('app')
  .controller('UpcomingConcertsController', UpcomingConcertsController);
