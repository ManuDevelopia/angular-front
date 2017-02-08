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

  ProjectEditor.$inject = ['$http', '$stateParams', 'ProjectListService', '$location'];
  function ProjectEditor($http, $stateParams, ProjectListService, $location) {
    var vm = this;
    var id = $stateParams.id;
    
    if ( id !== undefined ||
         id.length > 0){
      ProjectListService.getItemById(id)
        .then(function(prj){
          vm.name = prj.name;
          vm.author= prj.author;
          vm.url = prj.url;
        })
        .catch(function(err){
          console.log(err);
        });
    } 

    vm.create = function () {
      var project = {
        name: vm.name,
        author: vm.author,
        url: vm.url
      };

      if (vm.name) {
        ProjectListService.addItem(project)
          .then(function(ok){
            console.log(ok);
            $location.path('/list');
          })
          .catch(function(err){
            console.log(err);
          });
       }

    };

    vm.update = function() {
      var project = {
        name: vm.name,
        author: vm.author,
        url: vm.url
      };

      if (vm.name) {
        ProjectListService.updateItem(project)
          .then(function(ok){
            console.log(ok);
            $location.path('/list');
          })
          .catch(function(err){
            console.log(err);
          });
       }
    };
  }

})();
