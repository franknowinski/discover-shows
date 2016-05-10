function ArtistService($http, Restangular){
  Restangular.setBaseUrl('/api/v1');

  this.getArtists = Restangular.one('artists').get();

  this.getArtist = function(id){
    return Restangular.one('artists', id).get();
  }
}

angular
  .module('app')
  .service('ArtistService', ArtistService)
