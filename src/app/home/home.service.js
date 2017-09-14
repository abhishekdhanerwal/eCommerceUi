(function () {
  'use strict';

  angular
    .module('app.home')
    .factory('homeFactory', homeFactory);

  homeFactory.$inject = ['$http'];

  function homeFactory($http) {
    var service = {};

    // service.newNotice = function (data) {
    //   var promise = $http.post(__env.dataServerUrl + '/createNotice', data)
    //     .then(
    //       function (response) {
    //         return response;
    //       },
    //       function (response) {
    //         return response;
    //       });
    //   return promise;
    // };
    //
    // service.updateNotice = function (data , noticeId) {
    //   var promise = $http.put(__env.dataServerUrl + '/notice/'+noticeId, data)
    //     .then(
    //       function (response) {
    //         return response;
    //       },
    //       function (response) {
    //         return response;
    //       });
    //   return promise;
    // };
    //
    // service.getSociety = function(data){
    //   var promise = $http.get(__env.dataServerUrl + '/societies')
    //     .then(
    //       function (response) {
    //         return response;
    //       },
    //       function (response) {
    //         return response;
    //       });
    //   return promise;
    // };

    return service;
  };
}());

