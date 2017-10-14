(function () {
  'use strict';

  angular
    .module('app.nav')
    .controller('NavController', NavController);

  NavController.$inject = ['$q', 'toaster', '$localStorage', 'role' , '$scope' , '$state'];
  /* @ngInject */
  function NavController($q, toaster, $localStorage, role ,  $scope , $state) {
    var vm = this;

    activate();

    $scope.status = {
      isopen: false
    };

    $scope.toggled = function(open) {
      $log.log('Dropdown is now: ', open);
    };

    $scope.toggleDropdown = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.status.isopen = !$scope.status.isopen;
    };

    function activate() {
      vm.isAdminRole = role.isAdminRole();
      vm.isSuperAdminRole = role.isSuperAdminRole();
      vm.isConsumerRole = role.isConsumerRole();

      // vm.ACCESS_LEVEL = ACCESS_LEVEL;

      vm.navigationBarMen = [
        {
          "name":"T-shirts & Polos",
          "amazonNodeId":"1968120031",
          "amazonSearchIndex":"Apparel",
          "sort":"reviewrank_authority"
        },{
          "name":"Shirts",
          "amazonNodeId":"1968093031",
          "amazonSearchIndex":"Apparel",
          "sort":"reviewrank_authority"
        },{
          "name":"Jeans",
          "amazonNodeId":"1968076031",
          "amazonSearchIndex":"Apparel",
          "sort":"reviewrank_authority"
        },{
          "name":"Innerwear",
          "amazonNodeId":"1968126031",
          "amazonSearchIndex":"Apparel",
          "sort":"reviewrank_authority"
        },{
          "name":"Shorts",
          "amazonNodeId":"1968097031",
          "amazonSearchIndex":"Apparel",
          "sort":"reviewrank_authority"
        },{
          "name":"Sportswear",
          "amazonNodeId":"1968062031",
          "amazonSearchIndex":"Apparel",
          "sort":"reviewrank_authority"
        },{
          "name":"Sunglasses & Spectacle Frames",
          "amazonNodeId":"1968032031",
          "amazonSearchIndex":"Apparel",
          "sort":"reviewrank_authority"
        },{
          "name":"Socks",
          "amazonNodeId":"1968103031",
          "amazonSearchIndex":"Apparel",
          "sort":"reviewrank_authority"
        },{
          "name":"Rainwear",
          "amazonNodeId":"1968098031",
          "amazonSearchIndex":"Apparel",
          "sort":"reviewrank_authority"
        },{
          "name":"Accessories",
          "amazonNodeId":"1968025031",
          "amazonSearchIndex":"Apparel",
          "sort":"reviewrank_authority"
        },{
          "name":"Ethnic Wear",
          "amazonNodeId":"1968248031",
          "amazonSearchIndex":"Apparel",
          "sort":"reviewrank_authority"
        },{
          "name":"Trousers",
          "amazonNodeId":"1968125031",
          "amazonSearchIndex":"Apparel",
          "sort":"reviewrank_authority"
        },{
          "name":"Jackets",
          "amazonNodeId":"1968088031",
          "amazonSearchIndex":"Apparel",
          "sort":"reviewrank_authority"
        },{
          "name":"Suits & Blazers",
          "amazonNodeId":"1968107031",
          "amazonSearchIndex":"Apparel",
          "sort":"reviewrank_authority"
        },{
          "name":"Sweatshirts & Hoodies",
          "amazonNodeId":"11960414031",
          "amazonSearchIndex":"Apparel",
          "sort":"reviewrank_authority"
        },{
          "name":"Sweaters",
          "amazonNodeId":"1968077031",
          "amazonSearchIndex":"Apparel",
          "sort":"reviewrank_authority"
        },{
          "name":"Sleep & Lounge Wear",
          "amazonNodeId":"1968082031",
          "amazonSearchIndex":"Apparel",
          "sort":"reviewrank_authority"
        },{
          "name":"Unstitched Fabric",
          "amazonNodeId":"5229856031",
          "amazonSearchIndex":"Apparel",
          "sort":"reviewrank_authority"
        },{
          "name":"Sportswear",
          "amazonNodeId":"1968062031",
          "amazonSearchIndex":"Apparel",
          "sort":"reviewrank_authority"
        },{
          "name":"Shoes",
          "":""
        },{
          "name":"Sports Shoes"
        },{
          "name":"Formal Shoes"
        },{
          "name":"Casual Shoes"
        },{
          "name":"Men's Fashion"
        },{
          "name":"Amazon Fashion"
        },{
          "name":"Fashion Sales & Deals"
        }
      ]

      vm.navigationBarMobile = [
        {
          "name":"All Mobile Phones"
        },{
          "name":"All Mobile Accessories"
        },{
          "name":"Cases & Covers"
        },{
          "name":"Screen Protectors"
        },{
          "name":"Power Banks"
        },{
          "name":"All Certified Refurbished"
        },{
          "name":"Tablets"
        },{
          "name":"Wearable Devices"
        },{
          "name":"Software"
        },{
          "name":"Office Supplies & Stationery"
        },{
          "name":"All Computers & Accessories"
        },{
          "name":"Laptops"
        },{
          "name":"Desktops & Monitors"
        },{
          "name":"Computer Accessories"
        },{
          "name":"Pen Drives & Memory Cards"
        },{
          "name":"Printers & Ink"
        }
    ];

      vm.navigationBarElectronics = [
        {
          "name":"Televisions"
        },{
          "name":"Home Entertainment Systems"
        },{
          "name":"Headphones"
        },{
          "name":"Speakers"
        },{
          "name":"MP3, Media Players & Accessories"
        },{
          "name":"Audio & Video Accessories"
        },{
          "name":"Cameras"
        },{
          "name":"DSLR Cameras"
        },{
          "name":"Camera Accessories"
        },{
          "name":"Musical Instruments & Professional Audio"
        },{
          "name":"Gaming Consoles"
        },{
          "name":"Air Coolers",
          "amazonNodeId":"5130993031",
          "amazonSearchIndex":"Electronics"
        },{
          "name":"Air Purifiers",
          "amazonNodeId":"5403404031",
          "amazonSearchIndex":"Electronics"
        },{
          "name":"Dehumidifiers",
          "amazonNodeId":"5403405031",
          "amazonSearchIndex":"Electronics"
        },{
          "name":"Fans",
          "amazonNodeId":"2083427031",
          "amazonSearchIndex":"Electronics"
        },{
          "name":"Humidifiers",
          "amazonNodeId":"5403407031",
          "amazonSearchIndex":"Electronics"
        },{
          "name":"Parts & Accessories",
          "amazonNodeId":"5403408031",
          "amazonSearchIndex":"Electronics"
        },{
          "name":"Room Heaters",
          "amazonNodeId":"2083424031",
          "amazonSearchIndex":"Electronics"
        },{
          "name":"Water Heaters",
          "amazonNodeId":"2083425031",
          "amazonSearchIndex":"Electronics"
        },{
          "name":"Refrigerators"
        },{
          "name":"Washing Machines"
        },{
          "name":"Kitchen & Home Appliances"
        },{
          "name":"Heating & Cooling Appliances"
        }
      ];

      vm.navigationBarHome = [
        {
          "name":"Kitchen & Dining"
        },{
          "name":"Kitchen Storage & Containers"
        },{
          "name":"Furniture"
        },{
          "name":"Home Furnishing"
        },{
          "name":"Bedroom Linen"
        },{
          "name":"Home Décor"
        },{
          "name":"Garden & Outdoors"
        },{
          "name":"Home Storage"
        },{
          "name":"Indoor Lighting"
        },{
          "name":"Home Improvement"
        },{
          "name":"Sewing & Craft Supplies"
        },{
          "name":"All Home & Kitchen"
        },{
          "name":"Shop by Room"
        },{
          "name":"Home & Kitchen Deals"
        },{
          "name":"All Pet Supplies"
        },{
          "name":"Dogs"
        }
      ];

      vm.navigationBarHealth = [
        {
          "name":"Beauty & Grooming"
        },{
          "name":"Luxury Beauty"
        },{
          "name":"Make-up"
        },{
          "name":"Health & Personal Care"
        },{
          "name":"Household Supplies"
        },{
          "name":"Personal Care Appliances"
        },{
          "name":"Subscribe & Save"
        },{
          "name":"Value Bazaar"
        },{
          "name":"All Grocery & Gourmet Foods"
        },{
          "name":"Coffee, Tea & Beverages"
        },{
          "name":"Snack Foods"
        }
      ];

      vm.navigationBarSports = [
        {
          "name":"Cricket"
        },{
          "name":"Badminton"
        },{
          "name":"Cycling"
        },{
          "name":"Football"
        },{
          "name":"Running"
        },{
          "name":"Camping & Hiking"
        },{
          "name":"Fitness Accessories"
        },{
          "name":"Yoga"
        },{
          "name":"Strength Training"
        },{
          "name":"Cardio Equipment"
        },{
          "name":"All Exercise & Fitness"
        },{
          "name":"All Sports, Fitness & Outdoors"
        },{
          "name":"Backpacks"
        },{
          "name":"Rucksacks"
        },{
          "name":"Suitcases & Trolley Bags"
        },{
          "name":"Travel Duffles"
        },{
          "name":"Travel Accessories"
        },{
          "name":"Wallets"
        }
      ];

      vm.navigationBarAutomobile = [
        {
          "name":"Automotive Services",
          "amazonNodeId":"11622248031",
          "amazonSearchIndex":"Automotive"
        }, {
          "name":"Car & Motorbike Care",
          "amazonNodeId":"5257472031",
          "amazonSearchIndex":"Automotive"
        },{
          "name":"Car & Vehicle Electronics",
          "amazonNodeId":"5257473031",
          "amazonSearchIndex":"Automotive"
        },{
          "name":"Car Accessories",
          "amazonNodeId":"5257474031",
          "amazonSearchIndex":"Automotive"
        },{
          "name":"Car Parts",
          "amazonNodeId":"5257475031",
          "amazonSearchIndex":"Automotive"
        },{
          "name":"Car Tyres & Rims",
          "amazonNodeId":"5257476031",
          "amazonSearchIndex":"Automotive"
        },{
          "name":"Motorbike Accessories & Parts",
          "amazonNodeId":"5257478031",
          "amazonSearchIndex":"Automotive"
        },{
          "name":"Navigation Devices",
          "amazonNodeId":"5257480031",
          "amazonSearchIndex":"Automotive"
        },{
          "name":"Oils & Fluids",
          "amazonNodeId":"5257481031",
          "amazonSearchIndex":"Automotive"
        },{
          "name":"Paintwork",
          "amazonNodeId":"5257482031",
          "amazonSearchIndex":"Automotive"
        },{
          "name":"Transporting & Storage",
          "amazonNodeId":"5257484031",
          "amazonSearchIndex":"Automotive"
        },{
          "name":"Vehicle Tools",
          "amazonNodeId":"5257483031",
          "amazonSearchIndex":"Automotive"
        }
      ];


    };

    vm.findProductList = function (item) {

      $state.go('app.product' , {obj:item , id:item.name});
    }
  }
})();
