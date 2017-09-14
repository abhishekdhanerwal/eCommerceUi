(function () {
  'use strict';

  angular
    .module('blocks.auth')
    .factory('facebookAuthentication', facebookAuthentication);

  facebookAuthentication.$inject = ['$rootScope'];

  function facebookAuthentication($rootScope) {

    var service = {};

    service.watchLoginChange = function() {

      var _self = this;

      FB.Event.subscribe('auth.authResponseChange', function(res) {

        if (res.status === 'connected') {

          /*
           The user is already logged,
           is possible retrieve his personal info
           */
          service.getUserInfo();

          /*
           This is also the point where you should create a
           session for the current user.
           For this purpose you can use the data inside the
           res.authResponse object.
           */

        }
        else {

          /*
           The user is not logged to the app, or into Facebook:
           destroy the session on the server.
           */

        }

      });

    }

    service.getUserInfo = function() {

      var _self = this;

      FB.api('/me', function(res) {
        $rootScope.$apply(function() {
          console.log(res)
          $rootScope.user = _self.user = res;
        });
      });

    }

    service.logout = function() {

      var _self = this;

      FB.logout(function(response) {
        $rootScope.$apply(function() {
          $rootScope.user = _self.user = {};
        });
      });

    }

    return service;

  }
})
