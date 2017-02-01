(function () {
  'use strict';

  angular.module('myFirstApp')

   .component('projectDetail', {
      templateUrl: 'project/view/project-detail.html',
      controllerAs: 'detail',
      bindings: {
        project: '<'
      }
    })
  ;

})();
