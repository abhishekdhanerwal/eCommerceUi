
(function () {
  'use strict';

  angular
    .module('app.product')
    .controller('ProductCtrl', ProductCtrl);

  ProductCtrl.$inject = ['$state', '$scope' , '$timeout' , 'productFactory', '$stateParams'];
  /* @ngInject */
  function ProductCtrl($state , $scope , $timeout , productFactory , $stateParams) {
    var vm = this;

    activate();

    function activate() {

      console.log($stateParams.obj)

      productFactory.getProductList($stateParams.obj.amazonNodeId, $stateParams.obj.amazonSearchIndex).then( function (response) {
        console.log(response);
        vm.productList = response.data;
      })

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


