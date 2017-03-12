(function () {
  'use strict';

  angular.module('myFirstApp')

   .component('userDetail', {
      templateUrl: 'app/user/view/detail.html',
      controller: UserDetail,
      controllerAs: 'detail',
      bindings: {
        user: '<'
      }
    })
  ;

  UserDetail.$inject = ['UserService', '$location'];
  function UserDetail(UserService, $location){
    var vm = this;

    vm.delete = function(user){
      UserService.deleteItem(user)
        .then(function(ok){
          console.log(ok);
          $location.path('/list');
        })
        .catch(function(err){
          console.log(err);
        });
        
    };
  }

})();
