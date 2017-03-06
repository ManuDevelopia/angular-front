(function(){
  'use strict';

  angular.module('myFirstApp')
    .controller('ProjectListController', ProjectListController);

  ProjectListController.$inject = ['$scope','LoggedInService'];
  function ProjectListController($scope, LoggedInService) {
    var list = this;

    list.$onInit = function(){
    };

    list.$doCheck = function(){
    };
  }


})();
