(function(){
  'use strict';

  angular.module('myFirstApp')
    .component('projectEditor', {
      templateUrl: 'app/project/view/editor.html',
      controller: ProjectEditor,
      controllerAs: 'editor',
      bindings: {
        project: '<',
        connectors: '<'
     }
    });

  ProjectEditor.$inject = ['$http', '$stateParams', '$location', 'ProjectService', 'ConnectorService', 'LoggedInService'];
  function ProjectEditor($http, $stateParams, $location, ProjectService, ConnectorService, LoggedInService) {
    var vm = this;
    var id = $stateParams.id;
    
    if ( id !== undefined &&
         id.length > 0){
      ProjectService.getItemById(id)
        .then(function(project){
          vm.project = project;
        })
        .catch(function(err){
          console.log(err);
        });
    }

    // Populate available Connectors
    ConnectorService.getItems()
      .then(function(connectors){
        vm.connectors =  connectors;
      });

    vm.create = function () {
      if (vm.project.name) {
        vm.project.user = LoggedInService.user();
        ProjectService.addItem(vm.project)
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
      if (vm.project.name) {
        ProjectService.updateItem(vm.project)
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
      ProjectService.deleteItem(vm.project)
        .then(function(ok){
            console.log(ok);
            $location.path('/list');
          })
          .catch(function(err){
            console.log(err);
          });
    };

    vm.addConnector = function(connector){
      vm.project.connectors.push(connector);
    };

    vm.removeConnector = function (connector) {
      vm.project.connectors.shift(connector);
    }
  }

})();
