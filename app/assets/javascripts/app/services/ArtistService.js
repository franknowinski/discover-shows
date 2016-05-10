function ArtistService($http, Restangular, $cookies){
  Restangular.setBaseUrl('/api/v1');

  this.getArtists = Restangular.one('artists').get();

  // this.getArtist = function(id){
  //   return $http.get('/artists/' + id);
  // };
  //
  // this.getSongs = function(id){
  //   return $http.get('/artists/' + id + '/songs');
  // };
}

angular
  .module('app')
  .service('ArtistService', ArtistService)
