(function(){
  'use strict';

  angular.module('myFirstApp')
    .controller('UserListController', UserListController);

  function UserListController($http) {
    var list = this;

    list.$onInit = function(){
    };

    list.$doCheck = function(){
    };
  }


})();
