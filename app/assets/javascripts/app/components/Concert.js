var Concert = {
  bindings: {
    concert: '='
  },
  templateUrl: 'app/views/concert.html',
  controller: function($cookies, ConcertService){
    var ctrl = this;

    ctrl.addConcert = function(){
      ConcertService.addUpcomingConcert(this.concert.id);
      ctrl.attending = true;
    };

    ctrl.attending = this.concert.users.some(function(user){
      return user.id == $cookies.get('id');
    });
  },
  controllerAs: 'artist'
}

angular
  .module('app')
  .component('concert', Concert);
