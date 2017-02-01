(function () {
  'use strict';

  var projectListJson = [
    {name: 'Project1', author: 'Manu Doe', url: 'www.Manujohsn.com'},
    {name: 'Project2', author: 'Jane Doe', url: 'www.Janejohsn.com'},
    {name: 'Project3', author: 'John Doe', url: 'www.johsn.com'}
  ];

  angular.module('myFirstApp')

    .component('projectList', {
      templateUrl: 'project/view/project-list.html',
      controller: ProjectListComponentController,
      bindings: {
        projects: '<'
      }
    })
  ;

  function ProjectListComponentController($http) {
    var list = this;

    list.$onInit = function(){
      list.projects = projectListJson;
    };

    // TODO: see how this gets fired
    list.$doCheck = function(){
       $http.get('http://localhost:5000/api/projects')
      .then(function (res) {
        console.log(res);
        list.projects = res.data;
      })
      .catch(function (err) {
        console.log(err);
      });
    };
  }


})();
