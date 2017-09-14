
(function () {
  'use strict';

  angular
    .module('app.adminUi')
    .controller('SmsCtrl', SmsCtrl);

  SmsCtrl.$inject = ['$state', '$scope' , '$timeout'];
  /* @ngInject */
  function SmsCtrl($state , $scope , $timeout) {
    var vm = this;

    activate();

    function activate() {

    }


  }
})();


