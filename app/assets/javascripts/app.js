angular
  .module('app', ['ui.router', 'templates'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('artist', {
        url: '/',
        templateUrl: 'app/views/home.html',
        controller: 'ArtistsController as artists',
        resolve: {
          items: function(ArtistService){
            return ArtistService.getArtists();
          }
        }
      })
      .state('artist.artists', {
        url: 'artists',
        templateUrl: 'app/views/artists.html',
        controller: 'ArtistsController as artists'
      })
      .state('artist.id', {
        url: 'artist/:id',
        templateUrl: 'app/views/artist.html',
        controller: 'ArtistController as artist',
        resolve: {
          item: function($stateParams, ArtistService){
            return ArtistService.getArtist($stateParams.id)
          }
        }
      })
    $urlRouterProvider.otherwise('/')
  })
