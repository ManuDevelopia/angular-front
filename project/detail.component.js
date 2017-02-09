(function () {
  'use strict';

  angular.module('myFirstApp')

   .component('projectDetail', {
      templateUrl: 'project/view/project-detail.html',
      controller: ProjectDetail,
      controllerAs: 'detail',
      bindings: {
        project: '<'
      }
    })
  ;

  ProjectDetail.$inject = ['ProjectListService', '$location'];
  function ProjectDetail(ProjectListService, $location){
    var vm = this;

    vm.delete = function(project){
      ProjectListService.deleteItem(project)
        .then(function(ok){
          console.log(ok);
          $location.path('/list');
        })
        .catch(function(err){
          console.log(err);
        });
        
    };
  }

})();
