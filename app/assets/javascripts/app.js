angular
  .module('app', ['ui.router', 'templates', 'ngMessages', 'ngResource', 'ngCookies', 'restangular'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/views/home/login.html',
        controller: 'LoginController as login'
      })
      .state('home', {
        url: '/',
        templateUrl: 'app/views/home/navbar.html',
        controller: 'HomeController as home'
      })
      .state('home.artists', {
        url: 'artists',
        templateUrl: 'app/views/artists.html',
        controller: 'ArtistsController as library'
      })
      .state('home.artists.id', {
        url: '/:id',
        templateUrl: 'app/views/artist.html',
        controller: 'ArtistController as artist'
      })
      .state('home.upcoming_concerts', {
        url: 'upcoming-concerts',
        templateUrl: 'app/views/upcoming_concerts.html',
        controller: 'UpcomingConcertsController as events'
        // resolve: {
        //   items: function($stateParams, ConcertService){
        //     return ConcertService.getUpcomingConcerts($stateParams.id);
        //   }
        // }
      })
      .state('home.browse_concerts', {
        url: 'browse-concerts',
        templateUrl: 'app/views/browse_concerts.html',
        controller: 'BrowseConcertsController as events',
        resolve: {
          items: function(ConcertService){
            return ConcertService.getAllConcerts();
          }
        }
      });
    $urlRouterProvider.otherwise('/login')
  });
