(function () {
  'use strict';

  angular.module('myFirstApp')
    .component('connectorList', {
      templateUrl: 'app/connector/view/list.html',
      controller: ConnectorListComponentController,
      controllerAs: 'list',
      bindings: {
        connectors: '<'
      }
    });

  ConnectorListComponentController.$inject = ['$http', 'ConnectorService'];
  function ConnectorListComponentController($http, ConnectorService) {
    var list = this;

    list.$onInit = function(){
      ConnectorService.getItems()
        .then(function (connectorList){
          list.connectors = connectorList;
        })
      .catch(function(error){
        console.log('An error occurred while getting the connector list!');
      });

    };
  }

})();
