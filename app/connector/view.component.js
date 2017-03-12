(function(){
  'use strict';
  
  angular.module('myFirstApp')
    .component('connectorView', {
      templateUrl: 'app/connector/view/view.html',
      controller: ConnectorView,
      controllerAs: 'view',
      bindings: {
        connector: '<'
      }
    });

  ConnectorView.$inject = ['$stateParams', '$location','ConnectorService', 'LoggedInService'];
  function ConnectorView($stateParams, $location, ConnectorService, LoggedInService) {
    var vm = this;
    var id = $stateParams.id;

    ConnectorService.getItemById(id)
      .then(function(connector){
        vm.connector = connector; 
        vm.connector.rawData = mockRawData;
        LoggedInService.connector(connector)
      })
      .catch(function(err){
        console.log(err);
      });

    vm.delete = function(connector){
      ConnectorService.deleteItem(connector)
        .then(function(ok){
          console.log(ok);
        })
        .catch(function(err){
          console.log(err);
        });
    };

    vm.delete = function(){
      ConnectorService.deleteItem(vm.connector)
        .then(function(ok){
          console.log(ok);
          $location.path('/list');
        })
        .catch(function(err){
          console.log(err);
        });
    }
  }


var mockRawData = JSON.parse('{"created_at":"2016-08-29T16:18:32Z","url":null,"commit_message":"UQ-393 improve error handling","branch":"UQ-393","committer_name":"Sebastian Scholze","committer_email":"scholze@atb-bremen.de","commit_sha":"6af3138ba7cf5c7dd3ae07775b67bc13ccc5beb4","repo_name":"U-QASAR/u-qasar.platform","badge_url":"https://s3.amazonaws.com/assets.coveralls.io/badges/coveralls_6.svg","coverage_change":0.0,"covered_percent":5.77854987656579}');

})();
