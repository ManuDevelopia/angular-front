(function () {
  'use strict';

  angular.module('myFirstApp')

   .component('metricDetail', {
      templateUrl: 'app/metric/view/detail.html',
      controller: MetricDetail,
      controllerAs: 'detail',
      bindings: {
        metric: '<'
      }
    })
  ;

  MetricDetail.$inject = ['MetricService', '$location'];
  function MetricDetail(MetricService, $location){
    var vm = this;

    vm.delete = function(metric){
      MetricService.deleteItem(metric)
        .then(function(ok){
          console.log(ok);
          $location.path('/metric/list');
        })
        .catch(function(err){
          console.log(err);
        });
        
    };
  }

})();
