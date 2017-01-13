(function () {
  'use strict';

  var projetJson = {
    name: 'DeploMyCI',
    author: 'Manu Garcia',
    url: 'http://deplomyci.com'
  };

  var projectListJson = [
  { name: 'Project1'},
  { name: 'Project2'},
  { name: 'Project3'},
  { name: 'Project4'},
  { name: 'Project5'},
  { name: 'Project6'},
  { name: 'Project7'}
  ];

  angular.module('myFirstApp', [])
  .controller('MyFirstController', function ($scope) {
      $scope.greet = projetJson;
    })

  .component('projectCreate', {
    templateUrl: 'project-create.html',
    controller: ProjectCreation,
    bindings: {
      name: '<'
    }
  })
  .component('projectList', {
    templateUrl: 'project-list.html',
    controller: ProjectList,
    bindings: {
      list: '<',
      test: '<'
    }
  })
  .component('projectDetail', {
    templateUrl: 'project-detail.html',
    controller: ProjectDetail,
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

    $ctrl.name = projetJson.name;

    $ctrl.create = function(){
      projectListJson.push({name: $ctrl.name});
      $ctrl.name = '';
    };

  } 


  function ProjectDetail(){

  }


})();
