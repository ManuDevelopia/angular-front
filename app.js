(function () {
  'use strict';

  // Do note declare any component here, do it in separate files
  angular.module('myFirstApp', ['ui.router']);

  angular.module('myFirstApp').controller('mainController', function ($scope, LoggedInService) {
    $scope.greet = 'Hi, this is Manu learning Angular, welcome to my application!';
    $scope.user = LoggedInService.user();
    $scope.project = LoggedInService.project();
    $scope.connector = LoggedInService.connector();
    $scope.metric = LoggedInService.metric();
  });

  angular.module('myFirstApp').config(RoutesConfig);

  angular.module('myFirstApp').constant('config',{
    apiUrl: 'https://deplomyci-backend.herokuapp.com/api'
  });

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRoutesProvider) {

    $urlRoutesProvider.otherwise('/project/list');

    $stateProvider.state('projectList', {
      url: '/project/list',
      template: '<project-list></project-list>'
    });

    $stateProvider.state('projectView', {
      url: '/project/view/:id',
      template: '<project-view></project-view>'
    });

    $stateProvider.state('projectEditor', {
      url: '/project/editor/:id',
      template: '<project-editor></project-editor>'
    });

    $stateProvider.state('connectorList', {
      url: '/connector/list',
      template: '<connector-list></connector-list>'
    });

    $stateProvider.state('connectorView', {
      url: '/connector/:id',
      template: '<connector-view></connector-view>'
    });

    $stateProvider.state('connectorEditor', {
      url: '/connector/editor/:id',
      template: '<connector-editor></connector-editor>'
    });

    $stateProvider.state('connectorCreator', {
      url: '/connector/creator/:project_id',
      template: '<connector-editor></connector-editor>'
    });

     $stateProvider.state('stateList', {
      url: '/state/list',
      template: '<state-list></state-list>'
    });

    $stateProvider.state('stateView', {
      url: '/state/:id',
      template: '<state-view></state-view>'
    });

    $stateProvider.state('stateEditor', {
      url: '/state/editor/:id',
      template: '<state-editor></state-editor>'
    });

    $stateProvider.state('stateCreator', {
      url: '/state/creator/:state_id',
      template: '<state-editor></state-editor>'
    });

    $stateProvider.state('metricList', {
      url: '/metric/list',
      template: '<metric-list></metric-list>'
    });

    $stateProvider.state('metricView', {
      url: '/metric/:id',
      template: '<metric-view></metric-view>'
    });

    $stateProvider.state('metricEditor', {
      url: '/metric/editor/:id',
      template: '<metric-editor></metric-editor>'
    });

    $stateProvider.state('metricCreator', {
      url: '/metric/creator/:project_id',
      template: '<metric-editor></metric-editor>'
    });

    $stateProvider.state('userList', {
      url: '/user/list',
      template: '<user-list></user-list>'
    });

    $stateProvider.state('userView', {
      url: '/user/view/:id',
      template: '<user-view></user-view>'
    });

    $stateProvider.state('userEditor', {
      url: '/user/editor/:id',
      template: '<user-editor></user-editor>'
    });
  }

})();
