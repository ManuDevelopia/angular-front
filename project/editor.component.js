(function(){
  'use strict';

  angular.module('myFirstApp')
    .component('projectEditor', {
      templateUrl: 'project/view/project-editor.html',
      controller: ProjectEditor,
      controllerAs: 'editor',
      bindings: {
        project: '<'
     }
    });

  ProjectEditor.$inject = ['$http', '$stateParams', '$location', 'ProjectService', 'LoggedInService'];
  function ProjectEditor($http, $stateParams, $location, ProjectService, LoggedInService) {
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
    }
  }

})();
