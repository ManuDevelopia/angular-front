(function(){
  'use strict';
  
  angular.module('myFirstApp')
    .component('userView', {
      templateUrl: 'app/user/view/view.html',
      controller: UserView,
      controllerAs: 'view',
      bindings: {
        user: '<'
      }
    });

  UserView.$inject = ['$stateParams', '$location','UserService', 'LoggedInService'];
  function UserView($stateParams, $location, UserService, LoggedInService) {
    var vm = this;
    var id = $stateParams.id;

    UserService.getItemById(id)
      .then(function(user){
        vm.user = user;
        LoggedInService.user(user);
      })
      .catch(function(err){
        console.log(err);
      });

    vm.delete = function(user){
      UserService.deleteItem(user)
        .then(function(ok){
          console.log(ok);
        })
        .catch(function(err){
          console.log(err);
        });
    };

    vm.delete = function(){
      UserService.deleteItem(vm.user)
        .then(function(ok){
          console.log(ok);
          $location.path('/user/list');
        })
        .catch(function(err){
          console.log(err);
        });
    }
  }

})();
