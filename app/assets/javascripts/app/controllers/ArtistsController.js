function ArtistsController(Artist, $filter){
  var ctrl = this;

  Artist.query(function(res){
    ctrl.artists = res.artists;
  });

  // ctrl.view = true;
  //
  // ctrl.changeViewStatus = function(){
  //   ctrl.view = false;
  // };
}

angular
  .module('app')
  .controller('ArtistsController', ArtistsController);
