(function(){
  'use strict';

  angular.module('myFirstApp')
    .service('LoggedInService', LoggedInService);

  LoggedInService.$inject = ['UserService'];
  function LoggedInService(UserService){
    var service = this;

    var loggedInUser;
    var loggedInProject;
    var loggedInConnector;
    var loggedInMetric;

    service.user = function(user){
      UserService.getItems()
        .then(function (users) {
          loggedInUser = users[0];
        });

      return loggedInUser;
    };;

    service.project = function(project){
      if (project !== undefined){
        loggedInProject = project;
      }

      return loggedInProject;
    };

    service.connector = function(connector){
      if (connector !== undefined){
        loggedInConnector = connector;
      }

      return loggedInConnector;
    };

    service.metric = function(metric){
      if (metric !== undefined){
        loggedInMetric = metric;
      }

      return loggedInMetric;
    };

    // TODO: maybe this could be a nice idea
    service.organization = function(){};
    service.team = function(){};
  }

})();