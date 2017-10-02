(function () {
  'use strict';

  angular
    .module('app.nav')
    .factory('navFactory', navFactory);

  navFactory.$inject = ['$http'];

  function navFactory($http) {
    var service = {};

    service.productList = function (nodeId , searchIndex) {

      var promise = $http.get(__env.dataServerUrl + '/user/' + nodeId + '/getNavigationBoard')
        .then(
          function (response) {
            return response;
          },
          function (response) {
            return response;
          });
      return promise;
    }

  return service;
  };
}());

