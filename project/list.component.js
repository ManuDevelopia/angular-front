(function () {
  'use strict';

  angular.module('myFirstApp')
    .component('projectList', {
      templateUrl: 'project/view/project-list.html',
      controller: ProjectListComponentController,
      controllerAs: 'list',
      bindings: {
        projects: '<'
      }
    });

  ProjectListComponentController.$inject = ['$http', 'ProjectService'];
  function ProjectListComponentController($http, ProjectService) {
    var list = this;

    list.$onInit = function(){
      ProjectService.getItems()
        .then(function (projectList){
          list.projects = projectList;
        })
      .catch(function(error){
        console.log('An error occurred while getting the project list!');
      });

    };
  }

})();
