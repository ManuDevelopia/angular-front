(function(){
  'use strict';

  var projectListJson = [
    {name: 'SProject1', author: 'Manu Doe', url: 'www.Manujohsn.com'},
    {name: 'SProject2', author: 'Jane Doe', url: 'www.Janejohsn.com'},
    {name: 'SProject3', author: 'John Doe', url: 'www.johsn.com'}
  ];


  angular.module('myFirstApp')
    .service('ProjectListService', ProjectListService);

  ProjectListService.$inject = ['$q'];
  function ProjectListService($q){
    var service = this;

    service.getItems = function(){
      var deferred = $q.defer();
      deferred.resolve(projectListJson);

      return deferred.promise;
    };

    service.getItemByName = function(id){
      var deferred = $q.defer();

      for (var project of projectListJson) {
        if (project.name === id) {
          deferred.resolve(project);
          break;
        }
      }

      return deferred.promise;
    };
 
    service.addItem = function(project){
      var deferred = $q.defer();

      projectListJson.push(project);
      deferred.resolve('Project has been added to collection');

      return deferred.promise;
    };  
  }

})();

/*
        $http.post('http://localhost:5000/api/projects', project)
          .then(function (res) {
            console.log(res);
          })
        .catch(function (err) {
          console.log(err);
        });
*/
