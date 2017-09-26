(function () {
  'use strict';

  angular
    .module('app.nav')
    .controller('NavController', NavController);

  NavController.$inject = ['$q', 'toaster', '$localStorage', 'role'];
  /* @ngInject */
  function NavController($q, toaster, $localStorage, role) {
    var vm = this;

    activate();

    function activate() {
      vm.isAdminRole = role.isAdminRole();
      vm.isSuperAdminRole = role.isSuperAdminRole();
      vm.isConsumerRole = role.isConsumerRole();

      // vm.ACCESS_LEVEL = ACCESS_LEVEL;

      vm.navigationBarMen = [
        {
          "name":"T-shirts & Polos",
          "amazonNodeId":"1968120031"
        },{
          "name":"Shirts",
          "amazonNodeId":"1968093031"
        },{
          "name":"Jeans",
          "amazonNodeId":"1968076031"
        },{
          "name":"Innerwear",
          "amazonNodeId":"1968126031"
        },{
          "name":"Shorts",
          "amazonNodeId":"1968097031"
        },{
          "name":"Sportswear",
          "amazonNodeId":"1968062031"
        },{
          "name":"Sunglasses & Spectacle Frames",
          "amazonNodeId":"1968032031"
        },{
          "name":"Socks",
          "amazonNodeId":"1968103031"
        },{
          "name":"Rainwear",
          "amazonNodeId":"1968098031"
        },{
          "name":"Accessories",
          "amazonNodeId":"1968025031"
        },{
          "name":"Ethnic Wear",
          "amazonNodeId":"1968248031"
        },{
          "name":"Trousers",
          "amazonNodeId":"1968125031"
        },{
          "name":"Jackets",
          "amazonNodeId":"1968088031"
        },{
          "name":"Suits & Blazers",
          "amazonNodeId":"1968107031"
        },{
          "name":"Sweatshirts & Hoodies",
          "amazonNodeId":"11960414031"
        },{
          "name":"Sweaters",
          "amazonNodeId":"1968077031"
        },{
          "name":"Sleep & Lounge Wear",
          "amazonNodeId":"1968082031"
        },{
          "name":"Unstitched Fabric",
          "amazonNodeId":"5229856031"
        },{
          "name":"Sportswear",
          "":"1968062031"
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
          "name":"All Electronics"
        },{
          "name":"Air Conditioners"
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
          "name":"Motorbike Accessories & Parts"
        },{
          "name":"Car Accessories"
        },{
          "name":"Car Electronics"
        },{
          "name":"Car Parts"
        },{
          "name":"Car & Bike Care"
        },{
          "name":"All Car & Motorbike Products"
        },{
          "name":"Industrial & Scientific Supplies"
        },{
          "name":"Test, Measure & Inspect"
        },{
          "name":"Lab & Scientific"
        },{
          "name":"Janitorial & Sanitation Supplies"
        }
      ];


    };
  }
})();
