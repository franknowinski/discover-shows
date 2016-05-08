function UpcomingConcertsController($filter, ConcertService, User, Concert){
  var ctrl = this;

  ctrl.user = User.get();

  Concert.query({'user_id': ctrl.user.id}, function(res){
    debugger;
  })

  //
  // ctrl.upcomingConcerts = items.data;
  //
  // ctrl.removeConcert = function(index){
  //   var concert = ctrl.upcomingConcerts[index];
  //   ConcertService.removeUpcomingConcert(concert.id)
  //     .then(function(res){
  //       ctrl.upcomingConcerts.splice(index,1);
  //       ctrl.refilter();
  //     })
  // };
  //
  // ctrl.search = '';
  //
  // ctrl.refilter = function(){
  //   ctrl.filteredList = $filter('filter')(ctrl.upcomingConcerts, ctrl.search);
  // };
  //
  // ctrl.refilter();
}

angular
  .module('app')
  .controller('UpcomingConcertsController', UpcomingConcertsController);
