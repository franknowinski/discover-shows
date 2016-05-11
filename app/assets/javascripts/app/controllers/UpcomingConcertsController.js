function UpcomingConcertsController(concerts, $filter, ConcertService){
  var ctrl = this;
  ctrl.upcomingConcerts = concerts.upcoming_concerts;

  ctrl.refilter = function(){
    ctrl.filteredList = $filter('filter')(ctrl.upcomingConcerts, ctrl.search);
  };

  ctrl.search;
  ctrl.refilter();

  ctrl.removeConcert = function(index){
    var concert = ctrl.filteredList[index];
    ConcertService.removeUpcomingConcert(concert.id)
      .then(function(res){
        ctrl.filteredList.splice(index, 1);
        ctrl.refilter();
      });
  };
}

angular
  .module('app')
  .controller('UpcomingConcertsController', UpcomingConcertsController);
