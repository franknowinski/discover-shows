var Concert = {
  bindings: {
    name: '='
  },
  templateUrl: 'app/views/concert.html',
  controller: function(){
    var ctrl = this;

    ctrl.concert = this.name;
  },
  controllerAs: 'artist'
}

angular
  .module('app')
  .component('concert', Concert);
