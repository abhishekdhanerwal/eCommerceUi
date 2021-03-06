(function () {
  'use strict';

  angular
    .module('app.product')
    .factory('productFactory', productFactory);

  productFactory.$inject = ['$http'];

  function productFactory($http) {
    var service = {};

    service.getProductList = function (nodeId , searchIndex , page, sort) {

      var promise = $http.get(__env.dataServerUrl + '/user/' + nodeId + '/page/'+ page + '/getNavigationBoard?sort=' + sort +'&searchIndex=' + searchIndex )
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

