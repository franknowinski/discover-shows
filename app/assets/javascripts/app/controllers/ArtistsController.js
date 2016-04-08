function ArtistsController(items){
  this.artists = items.data;
}

angular
  .module('app')
  .controller('ArtistsController', ArtistsController);
