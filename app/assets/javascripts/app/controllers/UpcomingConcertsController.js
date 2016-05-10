function UpcomingConcertsController($filter, ConcertService){
  var ctrl = this;

  ctrl.refilter = function(){
    ConcertService.getUpcomingConcerts.then(function(res){
      ctrl.filteredList = $filter('filter')(res.upcoming_concerts, ctrl.search);
    });
  };

  ctrl.search;
  ctrl.refilter();

  ctrl.removeConcert = function(index){
    var concert = this.filteredList[index];
    ConcertService.removeUpcomingConcert(concert.id)
      .then(function(){
        ctrl.filteredList.splice(index, 1);
      });
      ctrl.refilter();
  };

  //  //
  // ctrl.removeConcert = function(index){
  //   var concert = ctrl.upcomingConcerts[index];
  //   ConcertService.removeUpcomingConcert(concert.id)
  //     .then(function(res){
  //       ctrl.upcomingConcerts.splice(index,1);
  //       ctrl.refilter();
  //     })
  // };
  //
}

angular
  .module('app')
  .controller('UpcomingConcertsController', UpcomingConcertsController);
