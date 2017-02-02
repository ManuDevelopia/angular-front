(function(){
  'use strict';

  angular.module('myFirstApp')
    .component('projectEditor', {
      templateUrl: 'project/view/project-editor.html',
      controller: ProjectEditor,
      controllerAs: 'project',
      bindings: {
        name: '<',
        author: '<',
        url: '<'
      }
    });

  ProjectEditor.$inject = ['$http', '$stateParams', 'ProjectListService']
  function ProjectEditor($http, $stateParams, ProjectListService) {
    var vm = this;
    var id = $stateParams.id;
    var project = undefined;
    
    if ( id !== undefined){
      ProjectListService.getItemByName(id)
        .then(function(prj){
          project = prj;
        })
        .catch(function(err){
          console.log(err);
        });
    } 


    if (project !== undefined) {
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
        if (getProjectById(vm.name) !== undefined){
          projectListJson = projectListJson.filter(function(project, item){
            if (project.name !== vm.name){
              return project;              
            }
          }); 
        } 

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

})();
