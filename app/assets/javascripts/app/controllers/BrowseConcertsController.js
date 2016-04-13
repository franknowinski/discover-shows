function BrowseConcertsController(items, ArtistService, $filter){
  var ctrl = this;
  ctrl.concerts = items.data;

  // ctrl.artists = '';
  //
  // ctrl.getArtists = ArtistService.getArtists()
  //     .then(function(res){
  //       ctrl.artists = res.data;
  //     });

  // ctrl.search = '';
  //
  // ctrl.refilter = function(){
  //   ctrl.filteredList = $filter('filter')(ctrl.artists, ctrl.search);
  // }
  //
  // ctrl.refilter();
}

angular
  .module('app')
  .controller('BrowseConcertsController', BrowseConcertsController);
