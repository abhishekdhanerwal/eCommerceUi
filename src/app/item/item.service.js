(function () {
  'use strict';

  angular
    .module('app.item')
    .factory('itemFactory', itemFactory);

  itemFactory.$inject = ['$http'];

  function itemFactory($http) {
    var service = {};

    service.getDetail = function (asinId) {

      var promise = $http.get(__env.dataServerUrl + '/user/asin/'+asinId+'/getAllVariationProducts')
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
}());
