(function(){
  'use strict';

  angular.module('myFirstApp')
    .component('projectView', {
      templateUrl: 'app/project/view/view.html',
      controller: ProjectView,
      controllerAs: 'view',
      bindings: {
        project: '<'
      }
    });

  ProjectView.$inject = ['$stateParams', '$location','ProjectService', 'StateService', 'LoggedInService'];
  function ProjectView($stateParams, $location, ProjectService, StateService, LoggedInService) {
    var vm = this;
    var id = $stateParams.id;

    ProjectService.getItemById(id)
      .then(function(project){
        vm.project = project;
        LoggedInService.project(project)
      })
      .catch(function(err){
        console.log(err);
      });

    vm.delete = function(){
      ProjectService.deleteItem(vm.project)
        .then(function(ok){
          console.log(ok);
          $location.path('/list');
        })
        .catch(function(err){
          console.log(err);
        });
    }

    vm.saveStatus = function(){
      StateService.addItem({name: 'test'})
        .then(function(res){
          var status  = {name: 'Teststate', endpoint: 'www.test.com', metrics : []};
          vm.project.states = [];
          vm.project.states.push(status);
          ProjectService.updateItem(vm.project)
            .then(function(res){
              console.log(res);
            });
        })
      .catch(function(err){
        console.log(err);
      });

    }
  }

})();
