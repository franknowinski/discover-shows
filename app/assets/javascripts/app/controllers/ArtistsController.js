function ArtistsController(items, $filter, $cookies){
  this.artists = items.data;
  this.search = '';

  this.refilter = function(){
    this.filteredList = $filter('filter')(this.artists, this.search);
  };

  this.refilter();

  this.view = true;
  
  this.changeViewStatus = function(){
    this.view = false;
  }

}

angular
  .module('app')
  .controller('ArtistsController', ArtistsController);
