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

  ProjectView.$inject = ['$stateParams', 'ProjectListService'];
  function ProjectView($stateParams, ProjectListService) {
    var vm = this;
    var id = $stateParams.id;

    ProjectListService.getItemById(id)
      .then(function(prj){
        vm.project = prj; 
      })
      .catch(function(err){
        console.log(err);
      });
  }

})();
