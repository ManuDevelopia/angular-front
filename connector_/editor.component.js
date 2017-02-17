(function(){
  'use strict';

  angular.module('myFirstApp')
    .component('connectorEditor', {
      templateUrl: 'connector/view/editor.html',
      controller: ConnectorEditor,
      controllerAs: 'editor',
      bindings: {
        connector: '<'
     }
    });

  ConnectorEditor.$inject = ['$http', '$stateParams', 'ConnectorService', '$location'];
  function ConnectorEditor($http, $stateParams, ConnectorService, $location) {
    var vm = this;
    var id = $stateParams.id;
    
    if ( id !== undefined &&
         id.length > 0){
      ConnectorService.getItemById(id)
        .then(function(connector){
          vm.connector = connector;
        })
        .catch(function(err){
          console.log(err);
        });
    } 

    vm.create = function () {
      if (vm.connector.name) {
        ConnectorService.addItem(vm.connector)
          .then(function(ok){
            console.log(ok);
            $location.path('/list');
          })
          .catch(function(err){
            console.log(err);
          });
       }

    };

    vm.update = function() {
      if (vm.connector.name) {
        ConnectorService.updateItem(vm.connector)
          .then(function(ok){
            console.log(ok);
            $location.path('/list');
          })
          .catch(function(err){
            console.log(err);
          });
       }
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
