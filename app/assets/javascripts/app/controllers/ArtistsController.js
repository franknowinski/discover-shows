function ArtistsController(Artist, $filter){
  var ctrl = this;

  Artist.query(function(res){
    ctrl.artists = res.artists;
  });

  // ctrl.artists = Artist.query();

  // ctrl.artists = ctrl.getArtists.artists;
  // ctrl.search = '';
  //
  // ctrl.refilter = function(){
  //   ctrl.filteredList = $filter('filter')(ctrl.artists.artists, ctrl.search);
  // };

  // ctrl.refilter();

  ctrl.view = true;

  ctrl.changeViewStatus = function(){
    ctrl.view = false;
  };
}

angular
  .module('app')
  .controller('ArtistsController', ArtistsController);
