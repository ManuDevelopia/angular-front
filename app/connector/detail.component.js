(function () {
  'use strict';

  angular.module('myFirstApp')

   .component('connectorDetail', {
      templateUrl: 'app/connector/view/detail.html',
      controller: ConnectorDetail,
      controllerAs: 'detail',
      bindings: {
        connector: '<'
      }
    })
  ;

  ConnectorDetail.$inject = ['ConnectorService', '$location'];
  function ConnectorDetail(ConnectorService, $location){
    var vm = this;

    vm.delete = function(connector){
      ConnectorService.deleteItem(connector)
        .then(function(ok){
          console.log(ok);
          $location.path('/connector/list');
        })
        .catch(function(err){
          console.log(err);
        });
        
    };
  }

})();
