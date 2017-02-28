(function(){
  'use strict';
  
  angular.module('myFirstApp')
    .component('userView', {
      templateUrl: 'user/view/view.html',
      controller: UserView,
      controllerAs: 'view',
      bindings: {
        user: '<'
      }
    });

  UserView.$inject = ['$stateParams', '$location','UserService'];
  function UserView($stateParams, $location, UserService) {
    var vm = this;
    var id = $stateParams.id;

    UserService.getItemById(id)
      .then(function(prj){
        vm.user = prj; 
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
