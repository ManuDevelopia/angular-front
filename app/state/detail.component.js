(function () {
  'use strict';

  angular.module('myFirstApp')

   .component('stateDetail', {
      templateUrl: 'app/state/view/detail.html',
      controller: StateDetail,
      controllerAs: 'detail',
      bindings: {
        state: '<'
      }
    })
  ;

  StateDetail.$inject = ['StateService', '$location'];
  function StateDetail(StateService, $location){
    var vm = this;

    vm.delete = function(state){
      StateService.deleteItem(state)
        .then(function(ok){
          console.log(ok);
          $location.path('/state/list');
        })
        .catch(function(err){
          console.log(err);
        });

    };
  }

})();
