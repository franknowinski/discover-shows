function BrowseConcertsController(items, ArtistService, $filter){
  var ctrl = this;
  ctrl.concerts = items.data;

  this.search = '';

  this.refilter = function(){
    this.filteredList = $filter('filter')(this.concerts, this.search);
  };

  this.refilter();
}

angular
  .module('app')
  .controller('BrowseConcertsController', BrowseConcertsController);
