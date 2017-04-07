(function () {
  'use strict';

  angular.module('myFirstApp')
    .component('stateList', {
      templateUrl: 'app/state/view/list.html',
      controller: StateListComponentController,
      controllerAs: 'list',
      bindings: {
        states: '<'
      }
    });

  StateListComponentController.$inject = ['$http', 'StateService'];
  function StateListComponentController($http, StateService) {
    var list = this;

    list.$onInit = function(){
      StateService.getItems()
        .then(function (stateList){
          list.states = stateList;
        })
      .catch(function(error){
        console.log('An error occurred while getting the state list!');
      });

    };
  }

})();
