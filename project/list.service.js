(function(){
  'use strict';

  angular.module('myFirstApp')
    .service('ProjectListService', ProjectListService);

  ProjectListService.$inject = ['$q', '$http', 'config'];
  function ProjectListService($q, $http, config){
    var service = this;

    service.getItems = function(){
      var deferred = $q.defer();

      $http.get(config.apiUrl + '/projects')
        .then(function (res) {
          deferred.resolve(res.data);
        })
        .catch(function (err) {
          deferred.reject(err);
        });

      return deferred.promise;
    };

    service.getItemById = function(id){
      var deferred = $q.defer();

      $http.get(config.apiUrl + '/project/' + id)
        .then(function (res) {
          deferred.resolve(res.data);
        })
        .catch(function (err) {
          deferred.reject(err);
        });

      return deferred.promise;
    };

    service.addItem = function(project){
      var deferred = $q.defer();

      $http.post(config.apiUrl + '/projects', project)
        .then(function (res) {
          deferred.resolve(res.data);
        })
        .catch(function (err) {
          deferred.reject(err);
        });

      return deferred.promise;
    };

    service.updateItem = function(project){
      var deferred = $q.defer();

      $http.put(config.apiUrl + '/project/' + project._id, project)
        .then(function (res) {
          deferred.resolve(res.data);
        })
        .catch(function (err) {
          deferred.reject(err);
        });

      return deferred.promise;
    };

    service.deleteItem = function(project){
      var deferred = $q.defer();

      $http.delete(config.apiUrl + '/project/' + project._id)
        .then(function (res) {
          deferred.resolve(res.data);
        })
        .catch(function (err) {
          deferred.reject(err);
        });

      return deferred.promise;
    };

    service.addConector = function(projectId, connector){
      var deferred = $q.defer();

      getItemById(projectId)
        .then(function(res){
          var project = res.data;

          project.connectors.push(connector);
          updateItem(project)
            .then(function(resUpdate){
              deferred.resolve(project);
            });
        })
      .catch(function(err){
        deferred.reject(err);
        console.log(err);
      });

      return deferred.promise;
    }
  }

})();
