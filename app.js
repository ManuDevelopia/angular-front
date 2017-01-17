(function () {
  'use strict';

  var projectListJson = [
    { name: 'Project1', author: 'Manu Doe', url: 'www.Manujohsn.com'},
    { name: 'Project2', author: 'Jane Doe', url: 'www.Janejohsn.com'},
    { name: 'Project3', author: 'John Doe', url: 'www.johsn.com'}
  ];

  var app = angular.module('myFirstApp', [])
    .controller('MyFirstController', function ($scope) {
      $scope.greet = 'Hi, this is Manu learning Angular!';

      // TODO: as a sample I will pass a project to edit
      $scope.project = projectListJson[0];
    });

  app.component('projectCreate', {
    templateUrl: 'project-create.html',
    controller: ProjectCreation,
    controllerAs: 'create'
  });

  app.component('projectList', {
    templateUrl: 'project-list.html',
    controller: ProjectList,
    bindings: {
      list: '<'
    }
  });

  app.component('projectDetail', {
    templateUrl: 'project-detail.html',
    controller: ProjectDetail,
    controllerAs: 'detail',
    bindings: {
      project: '<'
    }
  });

  function ProjectDetail(){
  }

  function  ProjectList($http){
    var list = this;
    
    // TODO: the project list will only include 
    // minimal details to be shown at list
    list.project = projectListJson;

    $http.get('http://localhost:5000/api/projects')
      .then(function(res){
        console.log(res);
      })
      .catch(function(err){
        console.log(err);
      });
  }

  function ProjectCreation(){
    var vm = this;

    vm.create = function(){
      var project = {
        name: vm.name,
        author: vm.author,
        url: vm.url
      };

      if (vm.name){
        projectListJson.push(project);
      }

    };
  }

})();
