
(function () {
  'use strict';
  angular
    .module('app.admin')
    .controller('AdminListCtrl',AdminListCtrl);

  AdminListCtrl.$inject=['$state', '$filter', 'NgTableParams','adminFactory','$localStorage','SweetAlert' , '$stateParams' , 'toaster' , 'role']
    function AdminListCtrl( $state, $filter, NgTableParams, adminFactory , $localStorage,SweetAlert , $stateParams , toaster , role) {
        var vm = this;
        vm.progress = true;


      activate();

      function activate() {

        vm.adminList = [{
          "active":true,
          "name": "asd",
          "email": "asdW@dfsa.das",
          "mobile":"9786567567"
        },{
          "active":true,
          "name": "asd",
          "email": "asdW@dfsa.das",
          "mobile":"9786567567"
        },{
          "active":true,
          "name": "asd",
          "email": "asdW@dfsa.das",
          "mobile":"9786567567"
        },{
          "active":false,
          "name": "asd",
          "email": "asdW@dfsa.das",
          "mobile":"9786567567"
        }];

        listView();

      };

      function listView(){
        vm.tableParams = new NgTableParams(
          {
            page: 1, // show first page
            count: 5, // count per page
            sorting: {
              lastModified: 'desc' // initial sorting
            }, // count per page
            filter: {
              name: '' // initial filter
            }
          }, {
            getData: function (params) {

                  vm.progress = false;
                  if (vm.adminList != null) {
                    var filteredData = null;
                    var orderedData = null;
                    if (params != null) {
                      if (params.filter()) {
                        filteredData = $filter('filter')(vm.adminList, params.filter())
                      }
                      else {
                        filteredData = vm.adminList;
                      }
                      if (params.sorting()) {
                        orderedData = $filter('orderBy')(filteredData, params.orderBy());
                      }
                      else {
                        orderedData = filteredData;
                      }

                      params.total(orderedData.length);
                      console.log(orderedData.length);
                      var returnData = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count())
                      return returnData;
                    }
                    else {
                      return vm.adminList;
                    }
                  }
                }
            })
      }

      vm.toggleStatus = function (id) {
        SweetAlert.swal({
          title: "Are you sure?",
          text: "You want to change the status!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#4CAF50",
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          closeOnConfirm: true,
          closeOnCancel: true
        }, function (isConfirm) {
          if (isConfirm) {
            vm.progress = true;
            siteFactory.changeStatus(id).then(function (response) {
              if (response.status == 200) {
                $state.reload();
                toaster.info('Status Changed Successfully');
              }
              else if (response.status == -1) {
                vm.progress = false;
                toaster.error('Network Error');
              }
              else if (response.status == 404) {
                vm.progress = false;
                toaster.error('Site not found');
              }
              else {
                vm.progress = false;
                toaster.error('Backend error');
              }


            });
            // SweetAlert.swal({
            //   title: "Changed!",
            //   text: "Status has been changed.",
            //   type: "success",
            //   confirmButtonColor: "#007AFF"
            //
            // });
          } else {
            // SweetAlert.swal({
            //   title: "Cancelled",
            //   text: "",
            //   type: "error",
            //   confirmButtonColor: "#007AFF"
            // });
          }
        });

      }
    }
})();
