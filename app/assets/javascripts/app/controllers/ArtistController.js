function ArtistController(item){
  this.artist = item.data;
}

angular
  .module('app')
  .controller('ArtistController', ArtistController);
