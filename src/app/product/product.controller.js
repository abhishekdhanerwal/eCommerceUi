
(function () {
  'use strict';

  angular
    .module('app.product')
    .controller('ProductCtrl', ProductCtrl);

  ProductCtrl.$inject = ['$state', '$scope' , '$timeout'];
  /* @ngInject */
  function ProductCtrl($state , $scope , $timeout) {
    var vm = this;

    activate();

    function activate() {

      $scope.value13 = "10;35";
      $scope.options13 = {
        from: 0,
        to: 40,
        step: 1,
        dimension: "$",
        vertical: true,
        className: "clip-slider",
        css: {
          background: {
            "background-color": "silver"
          },
          range: {
            "background-color": "#C82E29"
          }
        }
      };

    }


  }
})();


