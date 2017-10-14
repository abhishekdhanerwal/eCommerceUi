
(function () {
  'use strict';

  angular
    .module('app.product')
    .controller('ProductCtrl', ProductCtrl);

  ProductCtrl.$inject = ['$state', '$scope' , '$timeout' , 'productFactory', '$stateParams' , '$window' , '$localStorage'];
  /* @ngInject */
  function ProductCtrl($state , $scope , $timeout , productFactory , $stateParams , $window , $localStorage) {
    var vm = this;
    vm.progress = true;
    vm.filterBrands = [];

    vm.dummyItems = _.range(1, 151); // dummy array of items to be paged
    vm.pager = {};
    vm.setPage = setPage;

    activate();

    function getProducts(page) {
      vm.progress = true;
      if(page == undefined)
        page = 1;
      productFactory.getProductList($localStorage.currentItem.amazonNodeId, $localStorage.currentItem.amazonSearchIndex , page , $localStorage.currentItem.sort).then( function (response) {
        console.log(response);

        if(response.status == 200){
          vm.productList = response.data;
          for(var index=0; index<vm.productList.length ; index++){
            if(vm.productList[index].amount != null)
              vm.productList[index].amount = vm.productList[index].amount.split(" ")[1];
            else
              vm.productList[index].amount = "N/A" ;
            vm.filterBrands[index] = {};
            vm.filterBrands[index].name = vm.productList[index].brand;
            vm.filterBrands[index].check = true;
          }

          vm.filterBrands = _.uniqBy(vm.filterBrands, function (e) {
            return e.name;
          });

          vm.filterBrands = _.sortBy(vm.filterBrands, 'name');

          vm.masterFilterBrands = angular.copy(vm.filterBrands);

          var b = _.minBy(vm.productList, function(o) {
            return o.amount;
          })
          console.log(b);
          console.log(vm.filterBrands)
          vm.progress = false;
        }
      })
    }



      // service implementation
      function GetPager(currentPage) {
        // default to first page
        currentPage = currentPage || 1;

        // default page size is 10
        // pageSize = pageSize || 10;

        // calculate total pages
        // var totalPages = Math.ceil(totalItems / pageSize);
        var totalPages = 40;

        var startPage, endPage;
        if (totalPages <= 10) {
          // less than 10 total pages so show all
          startPage = 1;
          endPage = totalPages;
        } else {
          // more than 10 total pages so calculate start and end pages
          if (currentPage <= 6) {
            startPage = 1;
            endPage = 10;
          } else if (currentPage + 4 >= totalPages) {
            startPage = totalPages - 9;
            endPage = totalPages;
          } else {
            startPage = currentPage - 5;
            endPage = currentPage + 4;
          }
        }

        // calculate start and end item indexes
        // var startIndex = (currentPage - 1) * pageSize;
        // var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        var pages = _.range(startPage, endPage + 1);

        // return object with all pager properties required by the view
        return {
          // totalItems: totalItems,
           currentPage: currentPage,
          // pageSize: pageSize,
           totalPages: totalPages,
          startPage: startPage,
          endPage: endPage,
          // startIndex: startIndex,
          // endIndex: endIndex,
          pages: pages
        };
      }

    function setPage(page) {
      if (page < 1 || page > vm.pager.totalPages) {
        return;
      }

      // get pager object from service
      vm.pager = GetPager(page);

      getProducts(page);
      console.log(page)

      // get current page of items
      // vm.items = vm.dummyItems.slice(vm.pager.startIndex, vm.pager.endIndex + 1);
    }

    function activate() {
      vm.filterBrands = [];

      console.log($stateParams.obj);
      if($stateParams.obj != null){
        $localStorage.currentItem = $stateParams.obj;
      }

      setPage(1);

      for(var index=0 ; index<vm.pageCount ;index++){
        vm.selectedPage[index] = index;
      }

      // getProducts();

      $scope.value13 = "10;35";
      $scope.options13 = {
        from: 0,
        to: 40,
        step: 1,
        dimension: 'Rs.',
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

    vm.buyItem = function(item){
      $state.go('app.item',{id:item.asinId});
    }

    vm.filterBrandName = function () {

      vm.filterBrands = vm.masterFilterBrands;
      if(vm.brandName == undefined){
        vm.brandName = "";
      }
      vm.filterBrands =_.filter(vm.filterBrands,function(item){
        return item.name.toLowerCase().indexOf(vm.brandName)>-1;
      });
      console.log(vm.filterBrands);
    }


  }
})();


