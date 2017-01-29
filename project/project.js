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
        name: '<',
        author: '<',
        url: '<'
      }
    })

    .component('projectView', {
      templateUrl: 'project/view/project-view.html',
      controller: ProjectView,
      controllerAs: 'view',
      bindings: {
        project: '<'
      }
    })
  ;

  function ProjectListComponentController() {
    var list = this;

    list.projects = projectListJson;
  }

  function ProjectList($http) {
    var list = this;

    // TODO: the project list will only include 
    // minimal details to be shown at list
    list.project = projectListJson;

    $http.get('http://localhost:5000/api/projects')
      .then(function (res) {
        console.log(res);
        list.project = res.data;
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  function ProjectEditor($http, $stateParams) {
    var vm = this;

    var project = getProjectById($stateParams.id);

    if (project  !== undefined){
      vm.name = project.name;
      vm.author = project.author;
      vm.url = project.url;
    }

    vm.create = function () {
      var project = {
        name: vm.name,
        author: vm.author,
        url: vm.url
      };

      if (vm.name) {
        projectListJson.push(project);

        $http.post('http://localhost:5000/api/projects', project)
          .then(function (res) {
            console.log(res);
          })
          .catch(function (err) {
            console.log(err);
          });

      }

    };
  }

  function ProjectView($stateParams) {
    var vm = this;
    var id = $stateParams.id;

    if (id === "") {
      id = 0;
    }

    vm.project = getProjectById(id);
  }

  function getProjectById(id){
    for (var project of projectListJson){
      if (project.name === id){
        return project;
      }
    }
  }

})();
