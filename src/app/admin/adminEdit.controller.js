
(function()
{'use strict';
  angular
    .module('app.admin')
    .controller('AdminEditCtrl',AdminEditCtrl);

  AdminEditCtrl.$inject=['$state','$http', '$stateParams','adminFactory' , 'toaster' , '$localStorage']
  function AdminEditCtrl($state, $http, $stateParams,adminFactory , toaster , $localStorage) {
        var vm = this;
        vm.progress = true;
        vm.resetDisabled = false;
        vm.submitDisabled = false;


        vm.client = {};
        vm.disabledInfo = true;

        function activate() {

        }



        activate();
    }
})();
