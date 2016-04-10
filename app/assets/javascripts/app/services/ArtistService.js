function ArtistService($http, $cookies){

  this.getArtists = function(){
    return $http.get('/artists');
  };

  this.getArtist = function(id){
    return $http.get('/artists/' + id);
  };

  this.getSongs = function(id){
    return $http.get('/artists/' + id + '/songs');
  };

  this.getConcerts = function(id){
    return $http.get('/artists/' + id + '/concerts')
  };

  this.getUpcomingConcerts = function(id){
    var user_id = $cookies.get('id');
    return $http.get('/user/' + user_id + '/upcoming_concerts');
  };

  this.addUpcomingConcert = function(concert_id){
    var user_id = $cookies.get('id');
    return $http.post('/user/' + user_id + '/upcoming_concerts', {concert_id});
  };

  this.removeUpcomingConcert = function(concert_id){
    var user_id = $cookies.get('id');
    return $http.delete('/user/' + user_id + '/upcoming_concerts/' + concert_id);
  };
}

angular
  .module('app')
  .service('ArtistService', ArtistService)
