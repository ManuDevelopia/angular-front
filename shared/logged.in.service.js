(function(){
  'use strict';

  angular.module('myFirstApp')
    .service('LoggedInUserService', LoggedInUserService);

  LoggedInUserService.$inject = ['UserService'];
  function LoggedInUserService(UserService){
    var service = this;
    var LoggedInUser =   {
      _id: "58a49a5eb8929469ea88927a",
      name: "Manu",
      email: "manu@developia.info",
      password: "fOTfSvjJ3GkvcgJOAJTPY1mIvFo=",
      __v: 0
    };

    service.user = function(){
      return LoggedInUser;
    }

    // TODO: maybe this could be a nice idea
    service.project = function(){}
    service.organization = function(){}
    service.team = function(){}
  }

})();
