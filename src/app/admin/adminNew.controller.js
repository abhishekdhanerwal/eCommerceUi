'use strict';
(function () {
  'use strict';
  angular
    .module('app.admin')
    .controller('AdminNewCtrl', AdminNewCtrl);

  AdminNewCtrl.$inject = ['$state', '$http', 'toaster', 'adminFactory', 'validationHelperFactory',  '$localStorage']
  function AdminNewCtrl($state, $http, toaster, adminFactory, validationHelperFactory,  $localStorage) {
    var vm = this;
    vm.progress = true;
    vm.resetDisabled = false;
    vm.submitDisabled = false;

    vm.reset = reset;
    vm.submit = submit;


    vm.hideAlertBox = function () {
      vm.errorMessage = false;
    };

    vm.site = {};
    vm.client = {};
    vm.temp = {};
    vm.primaryContact = {};
    vm.site.region = {};

    function activate() {
      vm.progress = false;
    }

    function reset() {
      vm.errorMessage = false;
      if (angular.isDefined(vm.site.region.id)) {
        delete vm.site.region.id;
      }
      if (angular.isDefined(vm.client.id)) {
        delete vm.client.id;
      }
      vm.site.name = '';
      vm.site.address = '';

      vm.site.readStatus = false;
      vm.selected = null;
      vm.site.primaryContact = {};
      vm.site.primaryContact.email = '';
      vm.site.primaryContact.mobile = '';

      vm.form.$setPristine();
      vm.form.$setUntouched();
    }

    function submit() {
      vm.resetDisabled = false;
      vm.submitDisabled = false;


      var firstError = null;
      if (vm.form.name.$invalid || vm.form.address.$invalid) {
        validationHelperFactory.manageValidationFailed(vm.form);
        vm.errorMessage = 'Validation error';
        return;

      } else {

        adminFactory.create(vm.site).then(function (response) {
          console.log(vm.site);


          if (response.status == 201) {
            if ($localStorage._identity.regionID == null) {
              toaster.info('Site Created', 'default');
              $state.go('app.admin.site');
            }
            else {
              toaster.info('Site Created', 'default');
              $state.go('app.admin.siteForregion', ({id: $localStorage._identity.regionID}));
            }
          }
          else if (response.status == -1) {
            vm.errorMessage = 'Network Error';
            toaster.error('Network Error', 'error');
            console.error(response);
          }
          else if (response.status == 400) {
            vm.errorMessage = response.data[0].message;
            toaster.error(response.data[0].message, 'error');
            console.error(response);
          }
          else {
            vm.errorMessage = response.data[0].message;
            toaster.error(response.data[0].message, 'error');
            console.error(response);
          }
          vm.resetDisabled = false;
          vm.submitDisabled = false;
        });
      }
    }

    activate()
  }
})();
