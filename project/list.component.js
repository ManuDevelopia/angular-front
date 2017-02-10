(function () {
  'use strict';

  angular.module('myFirstApp')
    .component('projectList', {
      templateUrl: 'project/view/project-list.html',
      controller: ProjectListComponentController,
      bindings: {
        projects: '<'
      }
    });

  ProjectListComponentController.$inject = ['$http', 'ProjectListService'];
  function ProjectListComponentController($http, ProjectListService) {
    var list = this;

    list.$onInit = function(){
      ProjectListService.getItems()
        .then(function (projectList){
          list.projects = projectList;
        })
      .catch(function(error){
        console.log('An error occurred while getting the project list!');
      });

    };
  }

})();
