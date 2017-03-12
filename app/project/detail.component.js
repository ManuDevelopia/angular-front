(function () {
  'use strict';

  angular.module('myFirstApp')

   .component('projectDetail', {
      templateUrl: 'app/project/view/detail.html',
      controller: ProjectDetail,
      controllerAs: 'detail',
      bindings: {
        project: '<'
      }
    })
  ;

  ProjectDetail.$inject = ['ProjectService', '$location'];
  function ProjectDetail(ProjectService, $location){
    var vm = this;

    vm.delete = function(project){
      ProjectService.deleteItem(project)
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
