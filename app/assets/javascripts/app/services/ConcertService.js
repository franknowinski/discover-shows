function ConcertService($cookies, $location, Restangular){
  var userId = $cookies.get('id');
  Restangular.setBaseUrl('/api/v1');

  this.getUpcomingConcerts = Restangular.one('users', userId)
    .one('upcoming_concerts').get();

  this.addUpcomingConcert = function(concert_id){
    Restangular.one('users', userId).post('upcoming_concerts', {concert_id})
  }

  this.removeUpcomingConcert = function(concert_id){
    return Restangular.one('users', userId).one('upcoming_concerts', concert_id).remove();
  }

  // this.removeUpcomingConcert = function(concert_id){
  //   var user_id = $cookies.get('id');
  //   return $http.delete('/user/' + user_id + '/upcoming_concerts/' + concert_id);
  // };


  // this.getConcerts = function(id){
  //   return $http.get('/artists/' + id + '/concerts');
  // };
  //
  // this.getUpcomingConcerts = function(id){
  //   var user_id = $cookies.get('id');
  //   return $http.get('/user/' + user_id + '/upcoming_concerts');
  // };
  //
  // this.addUpcomingConcert = function(concert_id){
  //   var user_id = $cookies.get('id');
  //   return $http.post('/user/' + user_id + '/upcoming_concerts', {concert_id});
  // };
  //
  // this.removeUpcomingConcert = function(concert_id){
  //   var user_id = $cookies.get('id');
  //   return $http.delete('/user/' + user_id + '/upcoming_concerts/' + concert_id);
  // };
  //
  // this.getAllConcerts = function(){
  //   var user_id = $cookies.get('id');
  //   return $http.get('/user/' + user_id + '/all-concerts');
  // };
}

angular
  .module('app')
  .service('ConcertService', ConcertService);
