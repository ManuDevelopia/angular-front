(function(){
  'use strict';

  angular.module('myFirstApp')
    .component('metricEditor', {
      templateUrl: 'metric/view/editor.html',
      controller: MetricEditor,
      controllerAs: 'editor',
      bindings: {
        metric: '<'
     }
    });

  MetricEditor.$inject = ['$http', '$stateParams', 'MetricService', '$location'];
  function MetricEditor($http, $stateParams, MetricService, $location) {
    var vm = this;
    var id = $stateParams.id;
    var project_id = $stateParams.project_id;
    
    if ( id !== undefined &&
         id.length > 0){
      MetricService.getItemById(id)
        .then(function(metric){
          vm.metric = metric;
        })
        .catch(function(err){
          console.log(err);
        });
    } 

    vm.create = function () {
      if (vm.metric.name) {
        MetricService.addItem(vm.metric)
          .then(function(ok){
            console.log(ok);
            $location.path('/metric/list');
          })
          .catch(function(err){
            console.log(err);
          });
       }

    };

    vm.update = function() {
      if (vm.metric.name) {
        MetricService.updateItem(vm.metric)
          .then(function(ok){
            console.log(ok);
            $location.path('/metric/list');
          })
          .catch(function(err){
            console.log(err);
          });
       }
    };

    vm.delete = function(){
      MetricService.deleteItem(vm.metric)
        .then(function(ok){
            console.log(ok);
            $location.path('/metric/list');
          })
          .catch(function(err){
            console.log(err);
          });
    }
  }

})();
