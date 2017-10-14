
(function () {
  'use strict';

  angular
    .module('app.item')
    .controller('ItemCtrl', ItemCtrl);

  ItemCtrl.$inject = ['$state', '$scope' , '$timeout' , 'itemFactory', '$stateParams' , '$window' , '$localStorage'];
  /* @ngInject */
  function ItemCtrl($state , $scope , $timeout , itemFactory , $stateParams , $window , $localStorage) {
    var vm = this;
    vm.progress = true;


    activate();

    function activate() {

      console.log($stateParams.id);

      itemFactory.getDetail($stateParams.id).then( function (response) {

        console.log(response);
      });

      vm.number2 = [{label: 1, otherLabel: 1}, {label: 2, otherLabel: 2}, {label: 3, otherLabel: 3}, {
        label: 4,
        otherLabel: 4
      }, {label: 5, otherLabel: 5}, {label: 6, otherLabel: 6}, {label: 7, otherLabel: 7}, {label: 8, otherLabel: 8}];

      vm.slickConfig3Loaded = true;
      vm.slickConfig3 = {
        method: {},
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


      vm.progress = false;

      vm.item = [{
        imageSet:[
          "https://images-eu.ssl-images-amazon.com/images/I/41y6L95IXVL.jpg",
          "https://images-eu.ssl-images-amazon.com/images/I/41y6L95IXVL.jpg",
          "https://images-eu.ssl-images-amazon.com/images/I/51vYIgId4FL.jpg",
          "https://images-eu.ssl-images-amazon.com/images/I/51pdIl-V4wL.jpg",
          "https://images-eu.ssl-images-amazon.com/images/I/41vcp3xzSlL.jpg"
        ],
        "Brand":"FLAGS",
        "ClothingSize":"30",
        "Color":"Vintage Green",
        "Department":"Men",
        "Amount":"2549"
      },
        {
          imageSet:[
            "https://images-eu.ssl-images-amazon.com/images/I/41y6L95IXVL.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/41y6L95IXVL.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/51vYIgId4FL.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/51pdIl-V4wL.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/41vcp3xzSlL.jpg"
          ],
          "Brand":"FLAGS",
          "ClothingSize":"30",
          "Color":"Vintage Green",
          "Department":"Men",
          "Amount":"2549"
        },
        {
          imageSet:[
            "https://images-eu.ssl-images-amazon.com/images/I/41y6L95IXVL.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/41y6L95IXVL.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/51vYIgId4FL.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/51pdIl-V4wL.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/41vcp3xzSlL.jpg"
          ],
          "Brand":"FLAGS",
          "ClothingSize":"30",
          "Color":"Vintage Green",
          "Department":"Men",
          "Amount":"2549"
        },
        {
          imageSet:[
            "https://images-eu.ssl-images-amazon.com/images/I/41y6L95IXVL.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/41y6L95IXVL.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/51vYIgId4FL.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/51pdIl-V4wL.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/41vcp3xzSlL.jpg"
          ],
          "Brand":"FLAGS",
          "ClothingSize":"30",
          "Color":"Vintage Green",
          "Department":"Men",
          "Amount":"2549"
        }];

      vm.setImage = vm.item[0].imageSet[0];

    }

    vm.changeImage = function (imgUrl) {

      vm.setImage = imgUrl;

    }

  }
})();


