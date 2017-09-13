(function () {
  'use strict';

  angular
    .module('blocks.auth')
    .factory('role', role);

  role.$inject = ['$localStorage', 'USER_ROLE'];

  /* @ngInject */

    function role($localStorage, USER_ROLE) {
      var service = {
        isAdminRole: isAdminRole,
        isSuperAdminRole: isSuperAdminRole,
        isConsumerRole : isConsumerRole,
      };
      return service;


    ////////////////

    function isSuperAdminRole() {
      if($localStorage._identity) {
        var roles = null;
         var roles = $localStorage._identity.role;
        var index = _.findIndex(roles, function(o) {
          index = 0 ;
          if (roles.match(/SUPER_ADMIN/g)){
            index++;
          }
          return index
        });
        return index >= 0;
      }
    }

    function isAdminRole() {
      if($localStorage._identity) {
        var roles = null;
         var roles = $localStorage._identity.role;
        var index = _.findIndex(roles, function(o) {
          index = 0 ;
          if (roles.match(/ROLE_ADMIN/g)){
            index++;
          }
          return index
        });
        return index >= 0;
      }
    }

    function isConsumerRole() {
      if($localStorage._identity) {
        var roles = null;
         var roles = $localStorage._identity.role;
        var index = _.findIndex(roles, function(o) {
          index = 0 ;
          if (roles.match(/CONSUMER/g)){
            index++;
          }
          return index
        });
        return index >= 0;
      }
    }
  }

})();


