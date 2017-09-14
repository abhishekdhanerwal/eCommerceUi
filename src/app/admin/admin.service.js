(function () {
  'use strict';
  angular
    .module('app.admin')
    .factory('adminFactory', adminFactory);

  adminFactory.$inject = ['$http', '$q'];
  function adminFactory($http,  $q) {
    var service = {};

    service.getRegion = function (id) {
      var promise = $http.get(__env.refDataUrl + "/clients/" + id + "/regions/activeList")
        .then(
          function (data) {
            return data;
          },
          function (errors) {
            return errors;
          });
      return promise;
    };
    service.getClient = function () {
      var promise = $http.get(__env.refDataUrl + "/clients/activeList")
        .then(
          function (data) {
            return data;
          },
          function (errors) {
            return errors;
          });
      return promise;
    };

    service.getAll = function () {
      var promise = $http.get(__env.refDataUrl + "/sites")
        .then(
          function (data) {
            return data;
          },
          function (errors) {
            return errors;
          });
      return promise;
    }

    service.create = function (site) {

      var promise = $http.post(__env.refDataUrl + "/sites", site)
        .then(
          function (data) {
            return data;
          },
          function (errors) {
            return errors;
          });
      return promise;
    };

    service.get = function (id) {
      var promise = $http.get(__env.refDataUrl + "/sites/" + id)
        .then(
          function (response) {
            return response;
          },
          function (response) {
            return response;
          });
      return promise;
    };

    service.update = function (id, site) {
      var promise = $http.put(__env.refDataUrl + "/sites/" + id, site)
        .then(
          function (response) {
            return response;
          },
          function (response) {
            return response;
          });
      return promise;
    };

    service.changeStatus = function (id) {
      var promise = $http.put(__env.refDataUrl + "/sites/" + id + "/toggleStatus")
        .then(
          function (response) {
            return response;
          },
          function (response) {
            return response;
          });
      return promise;
    };

    service.getUserlist = function (val) {
      var promise = $http.get(__env.refDataUrl + '/users/search', {
        params: {
          query: val
        }
      })
        .then(
          function (response) {
            return response;
          },
          function (response) {
            return response;
          });
      return promise;
    };

    return service;
  };
})();
