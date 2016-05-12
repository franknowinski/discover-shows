var BrowseConcert = {
  bindings: {
    concert: '='
  },
  templateUrl: 'app/views/browse_concert.html',
  controller: function(Restangular){
    var ctrl = this;

    ctrl.users = this.concert.users.map(function(user){
      return user.name || user.email;
    });

    Restangular.one('artists', this.concert.artist_id).get()
      .then(function(res){
        ctrl.artist = res.artist;
      });
  },
  controllerAs: 'artist'
}

angular
  .module('app')
  .component('browseConcert', BrowseConcert)
