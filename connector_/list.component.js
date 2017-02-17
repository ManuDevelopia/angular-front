(function () {
  'use strict';

  angular.module('myFirstApp')
    .component('connectorList', {
      templateUrl: 'connect/view/list.html',
      controller: ConnectorListComponentController,
      controllerAs: 'list',
      bindings: {
        connector: '<'
      }
    });

  ConnectorListComponentController.$inject = ['$http', 'ConnectorService'];
  function ConnectorListComponentController($http, ConnectorService) {
    var list = this;

    list.$onInit = function(){
      ConnectorService.getItems()
        .then(function (connectorList){
          list.connector = connectorList;
        })
      .catch(function(error){
        console.log('An error occurred while getting the connector list!');
      });

    };
  }

})();
