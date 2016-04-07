function ArtistService($http){

  this.getArtists = function(){
    return $http.get('/artists');
  }

  this.getArtist = function(id){
    return $http.get('/artists/' + id);
  }

  this.getAlbums = function(id){
    debugger;
    // https://api.spotify.com/v1/artists/3ImqpXKKgkH5VydfgX1hd4/top-tracks?country=ES
  }
}

angular
  .module('app')
  .service('ArtistService', ArtistService)
