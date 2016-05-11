function ConcertService($cookies, Restangular){
  var userId = $cookies.get('id');

  this.addUpcomingConcert = function(concert_id){
    Restangular.one('users', userId).post('upcoming_concerts', {concert_id})
  };

  this.removeUpcomingConcert = function(concert_id){
    return Restangular.one('users', userId).one('upcoming_concerts', concert_id).remove();
  };
}

angular
  .module('app')
  .service('ConcertService', ConcertService);
