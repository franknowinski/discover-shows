function ArtistController(item, singles, ArtistService){
  this.artist = item.data;
  this.songs = singles.data.splice(0, 10)
}

angular
  .module('app')
  .controller('ArtistController', ArtistController);
