angular
  .module('app', ['ui.router', 'templates', 'ngResource', 'ngCookies', 'restangular'])
  .config(function($stateProvider, $urlRouterProvider, RestangularProvider){
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/views/home/login.html'
      })
      .state('home', {
        url: '/',
        templateUrl: 'app/views/home/navbar.html',
        controller: 'HomeController as home'
      })
      .state('home.artists', {
        url: 'artists',
        templateUrl: 'app/views/artists.html',
        controller: 'ArtistsController as library',
        resolve: {
          library: function(Restangular){
            Restangular.setBaseUrl('/api/v1');
            return Restangular.one('artists').get();
          }
        }
      })
      .state('home.artists.id', {
        url: '/:id',
        templateUrl: 'app/views/artist.html',
        controller: 'ArtistController as artist',
        resolve: {
          library: function($stateParams, Restangular){
            Restangular.setBaseUrl('/api/v1');
            return Restangular.one('artists', $stateParams.id).get();
          }
        }
      })
      .state('home.upcoming_concerts', {
        url: 'upcoming-concerts',
        templateUrl: 'app/views/upcoming_concerts.html',
        controller: 'UpcomingConcertsController as events',
        resolve: {
          concerts: function($cookies, Restangular){
            Restangular.setBaseUrl('/api/v1');
            return Restangular.one('users', $cookies.get('id'))
                    .one('upcoming_concerts').get();
          }
        }
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
    $urlRouterProvider.otherwise('login')
  });
