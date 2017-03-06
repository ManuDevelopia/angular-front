(function(){
  'use strict';
  
  angular.module('myFirstApp')
    .component('metricView', {
      templateUrl: 'metric/view/view.html',
      controller: MetricView,
      controllerAs: 'view',
      bindings: {
        metric: '<'
      }
    });

  MetricView.$inject = ['$stateParams', '$location','MetricService'];
  function MetricView($stateParams, $location, MetricService) {
    var vm = this;
    var id = $stateParams.id;

    MetricService.getItemById(id)
      .then(function(prj){
        vm.metric = prj; 
      })
      .catch(function(err){
        console.log(err);
      });

    vm.delete = function(metric){
      MetricService.deleteItem(metric)
        .then(function(ok){
          console.log(ok);
        })
        .catch(function(err){
          console.log(err);
        });
    };

    vm.delete = function(){
      MetricService.deleteItem(vm.metric)
        .then(function(ok){
          console.log(ok);
          $location.path('/list');
        })
        .catch(function(err){
          console.log(err);
        });
    }
  }

})();
