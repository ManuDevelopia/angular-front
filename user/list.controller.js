(function(){
  'use strict';

  angular.module('myFirstApp')
    .controller('ProjectListController', ProjectListController);

  function ProjectListController($http) {
    var list = this;

    list.$onInit = function(){
    };

    list.$doCheck = function(){
    };
  }


})();
