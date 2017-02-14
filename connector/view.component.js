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

  ConnectorView.$inject = [];
  function ConnectorView(){
    var vm = this;

    vm.data = 'Hello this is a connector';
  }

})();
