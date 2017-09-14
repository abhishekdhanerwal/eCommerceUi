
(function () {
  'use strict';

  angular
    .module('blocks.auth')
    .controller('SignoutController', SignoutController);

  SignoutController.$inject = ['$state', 'toaster'];
  /* @ngInject */
  function SignoutController($state,  toaster) {
    var vm = this;

       vm.signout = function () {
        // principal.signout();
        $state.go('auth.signin');
       }
  }
  })();
