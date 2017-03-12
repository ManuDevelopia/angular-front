(function(){
  'use strict';

  angular.module('myFirstApp')
    .component('userEditor', {
      templateUrl: 'app/user/view/editor.html',
      controller: UserEditor,
      controllerAs: 'editor',
      bindings: {
        user: '<'
     }
    });

  UserEditor.$inject = ['$http', '$stateParams', 'UserService', '$location'];
  function UserEditor($http, $stateParams, UserService, $location) {
    var vm = this;
    var id = $stateParams.id;
    
    if ( id !== undefined &&
         id.length > 0){
      UserService.getItemById(id)
        .then(function(user){
          vm.user = user;
        })
        .catch(function(err){
          console.log(err);
        });
    } 

    vm.create = function () {
      if (vm.user.name) {
        UserService.addItem(vm.user)
          .then(function(ok){
            console.log(ok);
            $location.path('/user/list');
          })
          .catch(function(err){
            console.log(err);
          });
       }

    };

    vm.update = function() {
      if (vm.user.name) {
        UserService.updateItem(vm.user)
          .then(function(ok){
            console.log(ok);
            $location.path('/user/list');
          })
          .catch(function(err){
            console.log(err);
          });
       }
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
