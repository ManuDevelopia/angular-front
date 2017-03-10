(function () {
  'use strict';

  angular.module('myFirstApp')
    .component('userList', {
      templateUrl: 'user/view/list.html',
      controller: UserListComponentController,
      controllerAs: 'list',
      bindings: {
        users: '<',
        loggedInUser: '<'
      }
    });

  UserListComponentController.$inject = ['$http', 'UserService'];
  function UserListComponentController($http, UserService) {
    var list = this;

    list.$onInit = function(){
      UserService.getItems()
        .then(function (userList){
          list.users = userList;
        })
      .catch(function(error){
        console.log('An error occurred while getting the user list!');
      });
    };
  }

})();
