function ArtistsController(items, $filter, $cookies){
  this.artists = items.data;
  this.firstName = $cookies.get('name').split(' ')[0];

  this.search = '';

  this.refilter = function(){
    this.filteredList = $filter('filter')(this.artists, this.search);
  };

  this.refilter();
}

angular
  .module('app')
  .controller('ArtistsController', ArtistsController);
