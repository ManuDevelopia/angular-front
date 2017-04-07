(function(){
  'use strict';

  angular.module('myFirstApp')
    .component('stateView', {
      templateUrl: 'app/state/view/view.html',
      controller: StateView,
      controllerAs: 'view',
      bindings: {
        state: '<'
      }
    });

  StateView.$inject = ['$stateParams', '$location','StateService', 'LoggedInService'];
  function StateView($stateParams, $location, StateService, LoggedInService) {
    var vm = this;
    var id = $stateParams.id;

    StateService.getItemById(id)
      .then(function(state){
        vm.state = state;
        vm.state.rawData = mockRawData;
        LoggedInService.state(state)
      })
      .catch(function(err){
        console.log(err);
      });

    vm.delete = function(state){
      StateService.deleteItem(state)
        .then(function(ok){
          console.log(ok);
        })
        .catch(function(err){
          console.log(err);
        });
    };

    vm.delete = function(){
      StateService.deleteItem(vm.state)
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
