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

  ProjectView.$inject = ['$stateParams', '$location','ProjectListService'];
  function ProjectView($stateParams, $location, ProjectListService) {
    var vm = this;
    var id = $stateParams.id;

    ProjectListService.getItemById(id)
      .then(function(prj){
        vm.project = prj; 
      })
      .catch(function(err){
        console.log(err);
      });

    vm.delete = function(project){
      ProjectListService.deleteItem(project)
        .then(function(ok){
          console.log(ok);
        })
        .catch(function(err){
          console.log(err);
        });
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
