function ArtistService($http){

  this.getArtists = function(){
    return $http.get('/artists');
  }

  this.getArtist = function(id){
    return $http.get('/artists/' + id);
  }

  this.getSongs = function(id){
    return $http.get('/artists/' + id + '/songs');
  }
}

angular
  .module('app')
  .service('ArtistService', ArtistService)
