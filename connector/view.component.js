(function () {
  'use strict';

  angular.module('myFirstApp')
    .component('connectorView', {
      templateUrl: 'connector/connector-view.html',
      controller: ConnectorView,
      controllerAs: 'view',
      bindings: {
        data: '<'
      }
    });

  ConnectorView.$inject = ['$stateParams','ConnectorService'];
  function ConnectorView($stateParams, ConnectorService){
    var vm = this;
    var id = $stateParams.id;

    ConnectorService.getItemById(id)
      .then(function(res){
        vm.data = res;
      })
  }

})();
