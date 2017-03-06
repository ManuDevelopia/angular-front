(function(){
  'use strict';

  angular.module('myFirstApp')
    .service('MetricService', MetricService);

  MetricService.$inject = ['$q', '$http', 'config'];
  function MetricService($q, $http, config){
    var service = this;

    service.getItems = function(){
      var deferred = $q.defer();

      $http.get(config.apiUrl + '/metrics')
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

      $http.get(config.apiUrl + '/metric/' + id)
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

      $http.post(config.apiUrl + '/metrics', project)
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

      $http.put(config.apiUrl + '/metric/' + project._id, project)
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

      $http.delete(config.apiUrl + '/metric/' + project._id)
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
