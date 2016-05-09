function UpcomingConcertsController($filter, User, Restangular, ConcertService){
  var ctrl = this;
  Restangular.setBaseUrl('/api/v1');

  User.get().$promise.then(function(res){
    Restangular.one('users', res.id).one('upcoming_concerts').get()
      .then(function(res){
        ctrl.upcomingConcerts = res.upcoming_concerts;
      });
  });

  // User.get(function(res){
  //   ctrl.user = res;
  //   Restangular.one('users', ctrl.user.id)
  //   .one('upcoming_concerts')
  //   .get()
  //   .then(function(res){
  //     ctrl.upcomingConcerts = res.upcoming_concerts;
  //   });
  // });

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
}

angular
  .module('app')
  .controller('UpcomingConcertsController', UpcomingConcertsController);
