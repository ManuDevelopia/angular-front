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

    service.getItemByName = function(id){
      var deferred = $q.defer();

      $http.get(config.apiUrl + '/project/' + id)
        .then(function (res) {
          deferred.resolve(res.data);
        })
        .catch(function (err) {
          deferred.reject(err)
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
          deferred.reject(err)
        });

      return deferred.promise;
    };

    service.updateItem = function(project){
      var deferred = $q.defer();

      $http.put(config.apiUrl + '/project/' + project.id, project)
        .then(function (res) {
          deferred.resolve(res.data);
        })
        .catch(function (err) {
          deferred.reject(err)
        });

      return deferred.promise;
    };

    service.deleteItem = function(project){
      var deferred = $q.defer();

      $http.delete(config.apiUrl + '/project/' + project.id, project)
        .then(function (res) {
          deferred.resolve(res.data);
        })
        .catch(function (err) {
          deferred.reject(err)
        });

      return deferred.promise;
    };

  }

})();