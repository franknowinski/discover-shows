function BrowseConcertsController(items){
  this.concerts = items.data;
}

angular
  .module('app')
  .controller('BrowseConcertsController', BrowseConcertsController);
