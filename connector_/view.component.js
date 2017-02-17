(function(){
  'use strict';
  
  angular.module('myFirstApp')
    .component('connectorView', {
      templateUrl: 'connector/view/view.html',
      controller: ConnectorView,
      controllerAs: 'view',
      bindings: {
        connector: '<'
      }
    });

  ConnectorView.$inject = ['$stateParams', '$location','ConnectorService'];
  function ConnectorView($stateParams, $location, ConnectorService) {
    var vm = this;
    var id = $stateParams.id;

    ConnectorService.getItemById(id)
      .then(function(prj){
        vm.connector = prj; 
      })
      .catch(function(err){
        console.log(err);
      });

    vm.delete = function(connector){
      ConnectorService.deleteItem(connector)
        .then(function(ok){
          console.log(ok);
        })
        .catch(function(err){
          console.log(err);
        });
    };

    vm.delete = function(){
      ConnectorService.deleteItem(vm.connector)
        .then(function(ok){
          console.log(ok);
          $location.path('/list');
        })
        .catch(function(err){
          console.log(err);
        });
    }
  }

})();
