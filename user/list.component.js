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

  UserListComponentController.$inject = ['$http', 'UserService', 'LoggedInUserService'];
  function UserListComponentController($http, UserService, LoggedInUserService) {
    var list = this;

    list.$onInit = function(){
      UserService.getItems()
        .then(function (userList){
          list.users = userList;
        })
      .catch(function(error){
        console.log('An error occurred while getting the user list!');
      });

      list.loggedInUser = LoggedInUserService.user();
    };
  }

})();
