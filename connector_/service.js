(function(){
  'use strict';

  angular.module('myFirstApp')
    .service('ConnectorService', ConnectorService);

  ConnectorService.$inject = ['$q', '$http', 'config'];
  function ConnectorService($q, $http, config){
    var service = this;

    service.getItems = function(){
      var deferred = $q.defer();

      $http.get(config.apiUrl + '/connectors')
        .then(function (res) {
          deferred.resolve(res.data);
        })
        .catch(function (err) {
          deferred.reject(err);
        });

      return deferred.promise;
    };

    service.getItemById= function(id){
      var deferred = $q.defer();

      $http.get(config.apiUrl + '/connector/' + id)
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

      $http.post(config.apiUrl + '/connectors', project)
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

      $http.put(config.apiUrl + '/connector/' + project._id, project)
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

      $http.delete(config.apiUrl + '/connector/' + project._id)
        .then(function (res) {
          deferred.resolve(res.data);
        })
        .catch(function (err) {
          deferred.reject(err);
        });

      return deferred.promise;
    };

  }

})();
