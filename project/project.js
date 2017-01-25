(function(){
  'use strict';

  var projectListJson = [
  { name: '1 Project1', author: 'Manu Doe', url: 'www.Manujohsn.com'},
  { name: '2 Project2', author: 'Jane Doe', url: 'www.Janejohsn.com'},
  { name: '3 Project3', author: 'John Doe', url: 'www.johsn.com'}
  ];

  angular.module('myFirstApp' )

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
    })

    .component('projectEditor', {
      templateUrl: 'project/view/project-editor.html',
      controller: ProjectEditor,
      controllerAs: 'project',
      bindings: {
        project: '<'
      }
    });

  function ProjectListComponentController(){
    var list = this;

    list.projects = projectListJson;

  }

  function  ProjectList($http){
    var list = this;

    // TODO: the project list will only include 
    // minimal details to be shown at list
    list.project = projectListJson;

    $http.get('http://localhost:5000/api/projects')
      .then(function(res){
        console.log(res);
        list.project = res.data;
      })
    .catch(function(err){
      console.log(err);
    });
  }

  function ProjectEditor($http){
    var vm = this;

    vm.create = function(){
      var project = {
        name: vm.name,
        author: vm.author,
        url: vm.url
      };

      if (vm.name){
        projectListJson.push(project);

        $http.post('http://localhost:5000/api/projects', project )
          .then(function(res){
            console.log(res);
          })
        .catch(function(err){
          console.log(err);
        });

      }

    };
  }

})();
