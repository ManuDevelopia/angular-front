(function(){
  'use strict';

  angular.module('myFirstApp')
    .controller('ProjectListController', ProjectListController);

  function ProjectListController($http) {
    var list = this;

    list.$onInit = function(){
      list.projects = projectListJson;
    };

    // TODO: see how this gets fired
    list.$doCheck = function(){
       $http.get('http://localhost:5000/api/projects')
      .then(function (res) {
        console.log(res);
        list.projects = res.data;
      })
      .catch(function (err) {
        console.log(err);
      });
    };
  }


})();
