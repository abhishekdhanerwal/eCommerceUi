
(function () {
  'use strict';

  angular
    .module('app.adminUi')
    .controller('BannerCtrl', BannerCtrl);

  BannerCtrl.$inject = ['$state', '$scope' , '$timeout'];
  /* @ngInject */
  function BannerCtrl($state , $scope , $timeout) {
    var vm = this;

    activate();

    function activate() {


    }


  }
})();


