(function(){
  'use strict';

  var projectListJson = [
    {name: 'Project1', author: 'Manu Doe', url: 'www.Manujohsn.com'},
    {name: 'Project2', author: 'Jane Doe', url: 'www.Janejohsn.com'},
    {name: 'Project3', author: 'John Doe', url: 'www.johsn.com'}
  ];
  
  angular.module('myFirstApp')
    .component('projectView', {
      templateUrl: 'project/view/project-view.html',
      controller: ProjectView,
      controllerAs: 'view',
      bindings: {
        project: '<'
      }
    });

  function ProjectView($stateParams) {
    var vm = this;
    var id = $stateParams.id;

    vm.project = getProjectById(id);
  }

  function getProjectById(id) {
    for (var project of projectListJson) {
      if (project.name === id) {
        return project;
      }
    }
  }

})();
