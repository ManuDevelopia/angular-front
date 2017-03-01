(function({
  'use strict';

  angular.module('myFirstApp')
    .service('LoggedInUserService', LoggedInUserService);

  LoggedInUserService.$inject = [''];
  function LoggedInUserService(){
    var service = this;
    var LoggedInUser;

    service.user = function(){
      LoggedInUser = 
    }

    service.organization = function(){
    
    }

    service.team = function(){
    
    }

    service.project = function(){
    
    }
  }

}))();
