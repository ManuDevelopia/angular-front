(function () {
  'use strict';

  // Do note declare any component here, do it in separate files
  angular.module('myFirstApp', ['ui.router']);
  
  angular.module('myFirstApp').controller('mainController', function ($scope) {
      $scope.greet = 'Hi, this is Manu learning Angular!';
    });

  angular.module('myFirstApp').config(RoutesConfig);
  
RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRoutesProvider){

    $urlRoutesProvider.otherwise('/home');

     $stateProvider.state('projects', {
      url: '/projects',
      templateUrl: './project/view/project-list.html'
    });
     
     $stateProvider.state('project', {
      url: '/project',
      templateUrl: './project/view/project-list.html'
    });
  }


})();
