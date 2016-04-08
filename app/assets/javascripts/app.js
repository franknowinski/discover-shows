angular
  .module('app', ['ui.router', 'templates', 'ngMessages', 'ngCookies'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/views/login.html',
        controller: 'LoginController as login'
      })
      .state('zipcode', {
        url: '/zipcode',
        templateUrl: 'app/views/zipcode.html',
        controller: 'ZipController as zip'
      })
      .state('home', {
        url: '/',
        templateUrl: 'app/views/home.html',
        controller: 'HomeController as home'
      })
      .state('home.artists', {
        url: 'artists',
        templateUrl: 'app/views/artists.html',
        controller: 'ArtistsController as artists',
        resolve: {
          items: function( ArtistService){
            return ArtistService.getArtists();
          }
        }
      })
      .state('home.artists.id', {
        url: '/artist/:id',
        templateUrl: 'app/views/artist.html',
        controller: 'ArtistController as artist',
        resolve: {
          item: function($stateParams, ArtistService){
            return ArtistService.getArtist($stateParams.id)
          },
          singles: function($stateParams, ArtistService){
            return ArtistService.getSongs($stateParams.id)
          }
        }
      })
    $urlRouterProvider.otherwise('/login')
  });
