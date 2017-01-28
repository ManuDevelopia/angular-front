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

    $urlRoutesProvider.otherwise('/list');

     $stateProvider.state('list', {
      url: '/list',
      templateUrl: './project/view/project-list.html',
      component: 'projecctList'
    });
     
     $stateProvider.state('view', {
      url: '/view',
      templateUrl: './project/view/project-view.html',
      component: 'projectDetail'
    });

     $stateProvider.state('editor', {
      url: '/editor',
      templateUrl: './project/view/project-editor.html',
      component: 'ProjectEditor'
     });
  }


})();
