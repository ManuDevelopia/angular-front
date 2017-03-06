(function () {
  'use strict';

  angular.module('myFirstApp')
    .component('metricList', {
      templateUrl: 'metric/view/list.html',
      controller: MetricListComponentController,
      controllerAs: 'list',
      bindings: {
        metrics: '<'
      }
    });

  MetricListComponentController.$inject = ['$http', 'MetricService'];
  function MetricListComponentController($http, MetricService) {
    var list = this;

    list.$onInit = function(){
      MetricService.getItems()
        .then(function (metricList){
          list.metrics = metricList;
        })
      .catch(function(error){
        console.log('An error occurred while getting the metric list!');
      });

    };
  }

})();
