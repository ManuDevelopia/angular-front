(function(){
  'use strict';

  angular.module('myFirstApp')
    .service('LoggedInService', LoggedInService);

  LoggedInService.$inject = [];
  function LoggedInService(){
    var service = this;
    var loggedInUser =   {
      _id: "58a49a5eb8929469ea88927a",
      name: "Manu",
      email: "manu@developia.info",
      password: "fOTfSvjJ3GkvcgJOAJTPY1mIvFo=",
      __v: 0
    };

    var loggedInProject;
    var loggedInConnector;
    var loggedInMetric;

    service.user = function(user){
      if (user !== undefined){
        loggedInUser = user;
      }

      return loggedInUser;
    }

    service.project = function(project){
      if (project !== undefined){
        loggedInProject = project;
      }

      return loggedInProject;
    }
    
    service.connector = function(connector){
      if (connector !== undefined){
        loggedInConnector = connector;
      }

      return loggedInConnector;
    }

    service.metric = function(metric){
      if (metric !== undefined){
        loggedInMetric = metric;
      }

      return loggedInMetric;
    }

    // TODO: maybe this could be a nice idea
    service.organization = function(){}
    service.team = function(){}
  }

})();
