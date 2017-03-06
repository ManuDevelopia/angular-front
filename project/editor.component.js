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

  ProjectEditor.$inject = ['$http', '$stateParams', '$location', 'ProjectListService', 'LoggedInService'];
  function ProjectEditor($http, $stateParams, $location, ProjectListService, LoggedInService) {
    var vm = this;
    var id = $stateParams.id;
    
    if ( id !== undefined &&
         id.length > 0){
      ProjectListService.getItemById(id)
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
        ProjectListService.addItem(vm.project)
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
        ProjectListService.updateItem(vm.project)
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
      ProjectListService.deleteItem(vm.project)
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
