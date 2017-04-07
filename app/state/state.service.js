(function(){
  'use strict';

  angular.module('myFirstApp')
    .service('StateService', StateService);

  StateService.$inject = ['$q', '$http', 'config'];
  function StateService($q, $http, config){
    var service = this;

    service.getItems = function(){
      var deferred = $q.defer();

      $http.get(config.apiUrl + '/states')
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

      $http.get(config.apiUrl + '/state/' + id)
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

      $http.post(config.apiUrl + '/states', project)
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

      $http.put(config.apiUrl + '/state/' + project._id, project)
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

      $http.delete(config.apiUrl + '/state/' + project._id)
        .then(function (res) {
          deferred.resolve(res.data);
        })
        .catch(function (err) {
          deferred.reject(err);
        });

      return deferred.promise;
    };

    service.addMetric = function(stateId, metric){
      var deferred = $q.defer();

      service.getItemById(stateId)
        .then(function(res){
          var state = res.data;
          state.metrics.push(metric);
          updateItem()
            .then(function(res){
              deferred.resolve(state);
            });
        })
        .catch(function(err){
          deferred.reject(err);
        });

      return deferred.promise;
    };
  }

})();
