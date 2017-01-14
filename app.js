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
    });

  app.component('projectCreate', {
    templateUrl: 'project-create.html',
    controller: ProjectCreation,
    bindings: {
      name: '<'
    }
  });

  app.component('projectList', {
    templateUrl: 'project-list.html',
    controller: ProjectList,
    bindings: {
      list: '<',
      test: '<'
    }
  });

  app.component('projectDetail', {
    templateUrl: 'project-detail.html',
    bindings: {
      project: '<'
    }
  });

  function  ProjectList(){
    var list = this;

    list.project = projectListJson;
  }

  function ProjectCreation(){
    var $ctrl = this;

    $ctrl.create = function(){
      var project = {
        name: $ctrl.name,
        author: $ctrl.author,
        url: $ctrl.url
      };

      if ($ctrl.name){
        projectListJson.push(project);
      }

    };

  }

})();
