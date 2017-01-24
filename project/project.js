(function(){
  'use strict';


  var projectListJson = [
  { name: '1 Project1', author: 'Manu Doe', url: 'www.Manujohsn.com'},
  { name: '2 Project2', author: 'Jane Doe', url: 'www.Janejohsn.com'},
  { name: '3 Project3', author: 'John Doe', url: 'www.johsn.com'}
  ];


  angular.module('myFirstApp' )
    .controller('ProjectListController', function($scope){
      $scope.greet = 'Projects';  
    })
    .component('projectList', {
      templateUrl: 'project/view/project-list.html',
      controller: ProjectListComponentController,
      bindings: {
        projects: '<'
      }

    })
    .component('projectDetail', {
    templateUrl: 'project/view/project-detail.html',
    controllerAs: 'detail',
    bindings: {
      project: '<'
    }
  });
  


  function ProjectListComponentController(){
    var list = this;

    list.projects = projectListJson;

  }

})();
