(function () {
  'use strict';

  // Do note declare any component here, do it in separate files
  angular.module('myFirstApp', [])
    .controller('mainController', function ($scope) {
      $scope.greet = 'Hi, this is Manu learning Angular!';
    });


  
})();
