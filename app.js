(function () {
  'use strict';

  var projectListJson = [
    { name: 'Project1', author: 'Manu Doe', url: 'www.Manujohsn.com'},
    { name: 'Project2', author: 'Jane Doe', url: 'www.Janejohsn.com'},
    { name: 'Project3', author: 'John Doe', url: 'www.johsn.com'}
  ];


  // Do note declare any component here, do it in separate files
  angular.module('myFirstApp', [])
    .controller('mainController', function ($scope) {
      $scope.greet = 'Hi, this is Manu learning Angular!';
    })

/*
  .component('projectCreate', {
    templateUrl: './project/view/project-create.html',
    controller: ProjectCreation,
    controllerAs: 'create'
  })

  .component('projectDetail', {
    templateUrl: './project/view/project-detail.html',
    controller: ProjectDetail,
    controllerAs: 'detail',
    bindings: {
      project: '<'
    }
  });
*/

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
        list.project = res.data;
      })
      .catch(function(err){
        console.log(err);
      });
  }

  function ProjectCreation($http){
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
