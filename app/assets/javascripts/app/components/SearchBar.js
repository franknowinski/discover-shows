var SearchBar = {
  templateUrl: 'app/views/search_bar.html'
  controller: function(){},
  controllerAs: 'events'
}

angular
  .module('app')
  .component('searchBar', SearchBar);
