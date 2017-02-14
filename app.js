(function () {
  'use strict';

  // Do note declare any component here, do it in separate files
  angular.module('myFirstApp', ['ui.router']);

  angular.module('myFirstApp').controller('mainController', function ($scope) {
    $scope.greet = 'Hi, this is Manu learning Angular!';
  });

  angular.module('myFirstApp').config(RoutesConfig);

  angular.module('myFirstApp').constant('config',{
    apiUrl: 'http://localhost:5000/api'
  });

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRoutesProvider) {

    $urlRoutesProvider.otherwise('/list');

    $stateProvider.state('list', {
      url: '/list',
      template: '<project-list></project-list>'
    });

    $stateProvider.state('view', {
      url: '/view/:id',
      template: '<project-view></project-view>'
    });

    $stateProvider.state('editor', {
      url: '/editor/:id',
      template: '<project-editor></project-editor>'
    });

    $stateProvider.state('connector', {
      url: '/connector',
      template: '<connector-view></connector-view>'
    });
  }

})();
