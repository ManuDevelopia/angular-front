(function(){
  'use strict';

  angular.module('myFirstApp')
    .service('UserService', UserService);

  UserService.$inject = ['$q', '$http', 'config'];
  function UserService($q, $http, config){
    var service = this;

    service.getItems = function(){
      var deferred = $q.defer();

      $http.get(config.apiUrl + '/users')
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

      $http.get(config.apiUrl + '/user/' + id)
        .then(function (res) {
          deferred.resolve(res.data);
        })
        .catch(function (err) {
          deferred.reject(err);
        });

      return deferred.promise;
    };

    service.addItem = function(user){
      var deferred = $q.defer();

      $http.post(config.apiUrl + '/users', user)
        .then(function (res) {
          deferred.resolve(res.data);
        })
        .catch(function (err) {
          deferred.reject(err);
        });

      return deferred.promise;
    };

    service.updateItem = function(user){
      var deferred = $q.defer();

      $http.put(config.apiUrl + '/user/' + user._id, user)
        .then(function (res) {
          deferred.resolve(res.data);
        })
        .catch(function (err) {
          deferred.reject(err);
        });

      return deferred.promise;
    };

    service.deleteItem = function(user){
      var deferred = $q.defer();

      $http.delete(config.apiUrl + '/user/' + user._id)
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
