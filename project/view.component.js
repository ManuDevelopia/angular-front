(function(){
  'use strict';
  
  angular.module('myFirstApp')
    .component('projectView', {
      templateUrl: 'project/view/project-view.html',
      controller: ProjectView,
      controllerAs: 'view',
      bindings: {
        project: '<'
      }
    });

  ProjectView.$inject = ['$stateParams', '$location','ProjectListService', 'LoggedInService'];
  function ProjectView($stateParams, $location, ProjectListService, LoggedInService) {
    var vm = this;
    var id = $stateParams.id;

    ProjectListService.getItemById(id)
      .then(function(project){
        vm.project = project;
        LoggedInService.project(project)
      })
      .catch(function(err){
        console.log(err);
      });

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
