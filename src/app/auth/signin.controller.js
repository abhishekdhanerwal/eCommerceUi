(function () {
  'use strict';

  angular
    .module('blocks.auth')
    .controller('SigninController', SigninController);

  SigninController.$inject = ['$scope', '$state',  'toaster', '$localStorage', '$timeout' , 'principal' , 'role' , 'validationHelperFactory'];
  /* @ngInject */
  function SigninController($scope, $state,  toaster, $localStorage, $timeout , principal , role , validationHelperFactory ) {
    var vm = this;
    vm.progress = false;
    vm.showLoginForm = true;
    vm.showSignupForm = false;

    vm.signin = signin;

    function signin() {

      console.log(vm.Form)

      if (vm.Form.$invalid) {
        validationHelperFactory.manageValidationFailed(vm.Form);
        toaster.error('E-Mail or password may be wrong. Please try again !!');
        return;
      }
      else {

        principal.signin(vm.user.email, vm.password).then(function (user) {

          vm.isAdminRole = role.isAdminRole();
          vm.isSuperAdminRole = role.isSuperAdminRole();
          vm.isConsumerRole = role.isConsumerRole();

          if(vm.isMeterManagementRole) {
            $state.go('app.complaint')
          }
          else if(vm.isCreatorRole || vm.isSuperAdminRole){
            $state.go('app.society')
          }
          else if(vm.isVisitorAdminRole){
            $state.go('app.visitor')
          }
          else{
            $state.go('app.notice')
          }
        }, function () {
          if(vm.user=="" && vm.password!="")
          {
            toaster.error("Username is required");
          }
          else if(vm.password==""&& vm.user!="")
          {
            toaster.error("Password is required");
          }
          else if(vm.user=="" && vm.password=="")
          {
            toaster.error("Username and password are required");
          }
          else {
            toaster.error("Please enter valid credentials");
          }
          console.log(vm.user)
          console.log(vm.password)
        });

      }
    }

      vm.callSignup = function () {
        vm.progress = true;
        vm.showSignupForm = true;
        vm.showLoginForm = false;
        $timeout(function () {
          vm.progress = false;
        }, 1000);
      };

      vm.callLogin = function(){
        vm.progress = true;
        vm.showLoginForm = true;
        vm.showSignupForm = false;
        $timeout(function () {
          vm.progress = false;
        }, 1000);
      };

      // vm.fbLogin = function () {
      //   facebookAuthentication.watchLoginChange();
      // }

    // convert address from lat long
    function getAddressFromLatLang(latlng) {
      console.log(latlng);
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({'location': latlng}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          if (results[1]) {
            vm.state = results[1].address_components[3].long_name;
            vm.city = results[1].address_components[2].long_name;
            console.log(vm.state)
            console.log(vm.city)
          }
        } else {
          console.log("Geocode was not successfulfor the following reason: " + status);
        }
      });
    };


    function currentLocation() {
      vm.site = {};
      var options = {
        enableHighAccuracy: true
      };

      navigator.geolocation.getCurrentPosition(function (pos) {
          vm.site.lattitude = pos.coords.latitude;
          vm.site.longitude = pos.coords.longitude;
          getAddressFromLatLang({lat: parseFloat(vm.site.lattitude), lng: parseFloat(vm.site.longitude)});
        console.log(vm.site)
          // getAddressFromLatLang(pos.coords);
        },
        function (error) {
          alert('Unable to get location: ' + error.message);
        }, options);
    }

    currentLocation();

    // This is called with the results from from FB.getLoginStatus().
    vm.statusChangeCallback = function(response) {
      if (response.status === 'connected') {
        // Logged into your app and Facebook.
        vm._i();
      } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
        document.getElementById('status').innerHTML = 'Please log ' +
          'into this app.';
      }
    }

    vm.fbLogin = function() {
      FB.login(function(response) {
        // handle the response
        if(response.status==='connected') {
          vm._i();
        }
      }, {
        scope: 'publish_actions',
        return_scopes: true
      });
    }

    vm._i =  function(){
      FB.api('/me?fields=id,name,email', function(response) {
        console.log(response)

        vm.users = {};

        vm.users.name = response.name;
        vm.users.email = response.email;
        vm.users.profilePic = 'http://graph.facebook.com/'+ response.id + '/picture';

        console.log(vm.users)

        // document.getElementById("inputFname").value = response.first_name;
        // document.getElementById("inputLname").value = response.last_name;
        // document.getElementById("inputEmail").value = response.email;
      });
    }

    vm.logout = function() {

      var _self = this;

      FB.logout(function(response) {
        $rootScope.$apply(function() {
          $rootScope.user = {};
        });
      });

    }


    activate();

    function activate() {
      //TODO to be removed;
      // vm.user = __env.user;
      // vm.password = __env.password;

      (function(thisdocument, scriptelement, id) {
        var js, fjs = thisdocument.getElementsByTagName(scriptelement)[0];
        if (thisdocument.getElementById(id)) return;

        js = thisdocument.createElement(scriptelement); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js"; //you can use
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));

      window.fbAsyncInit = function() {
        FB.init({
          appId      : '1660547020654203', //Your APP ID
          cookie     : true,  // enable cookies to allow the server to access
                              // the session
          xfbml      : true,  // parse social plugins on this page
          version    : 'v2.10' // use version 2.1
        });

        // These three cases are handled in the callback function.
        FB.getLoginStatus(function(response) {
          vm.statusChangeCallback(response);
        });

      };

      $timeout(function () {
        toaster.info("User is not logged in");
      }, 1000);

    }
  }
})();
