(function(){
  'use strict';

  angular.module('myFirstApp')
    .component('connectorEditor', {
      templateUrl: 'connector/view/editor.html',
      controller: ConnectorEditor,
      controllerAs: 'editor',
      bindings: {
        connector: '<'
     }
    });

  ConnectorEditor.$inject = ['$stateParams', '$location', 'ConnectorService', 'MetricService'];
  function ConnectorEditor($stateParams, $location, ConnectorService, MetricService) {
    var vm = this;
    var id = $stateParams.id;
    
    if ( id !== undefined &&
         id.length > 0){
      ConnectorService.getItemById(id)
        .then(function(connector){
          connector.rawdata = prepareMockRawData(rawdata);
          vm.connector = connector;
        })
        .catch(function(err){
          console.log(err);
        });
    } 

    vm.create = function () {
      if (vm.connector.name) {
        ConnectorService.addItem(vm.connector)
          .then(function(ok){
            console.log(ok);
            $location.path('/connector/list');
          })
          .catch(function(err){
            console.log(err);
          });
       }

    };

    vm.update = function() {
      if (vm.connector.name) {
        ConnectorService.updateItem(vm.connector)
          .then(function(ok){
            console.log(ok);
            $location.path('/connector/list');
          })
          .catch(function(err){
            console.log(err);
          });
       }
    };

    vm.delete = function(){
      ConnectorService.deleteItem(vm.connector)
        .then(function(ok){
            console.log(ok);
            $location.path('/connector/list');
          })
          .catch(function(err){
            console.log(err);
          });
    };

    vm.addMetric = function(metric){
      MetricService.addItem(metric)
        .then(function (res) {
          vm.connector.metrics.push(res);
        })
    }
  }

// mockdata remove!!!
var rawdata = JSON.parse('{"created_at":"2016-08-29T16:18:32Z","url":null,"commit_message":"UQ-393 improve error handling","branch":"UQ-393","committer_name":"Sebastian Scholze","committer_email":"scholze@atb-bremen.de","commit_sha":"6af3138ba7cf5c7dd3ae07775b67bc13ccc5beb4","repo_name":"U-QASAR/u-qasar.platform","badge_url":"https://s3.amazonaws.com/assets.coveralls.io/badges/coveralls_6.svg","coverage_change":0.0,"covered_percent":5.77854987656579}');

  function prepareMockRawData(rawdata){
    var data = [];

    for (var raw of Object.keys(rawdata)){
     data.push({
      name: raw,
      value: rawdata[raw]
     }) 
    }
    return data;
  }

})();