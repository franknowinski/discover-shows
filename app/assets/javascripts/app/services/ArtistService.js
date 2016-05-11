function ArtistService(Restangular){
  this.updatePopularity = function(artist){
    return Restangular.one('artists', artist.id).customPUT({'popularity': artist.popularity});
  };
}

angular
  .module('app')
  .service('ArtistService', ArtistService);
