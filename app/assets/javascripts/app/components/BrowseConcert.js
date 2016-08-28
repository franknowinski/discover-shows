var BrowseConcert = {
  bindings: {
    concert: '='
  },
  templateUrl: 'app/views/browse_concert.html',
  controller: function(Restangular){
    // ctrl.$inject = ['Restangular'];
    var ctrl = this;

    Restangular.one('artists', this.concert.artist_id).get()
      .then(function(res){
        ctrl.artist = res.artist;
      });

    ctrl.users = this.concert.users.map(function(user){
      return user.name || user.email;
    });
  },
  controllerAs: 'artist'
}

angular
  .module('app')
  .component('browseConcert', BrowseConcert)
