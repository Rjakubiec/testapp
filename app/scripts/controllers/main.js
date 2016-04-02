'use strict';

angular.module('testApp')
    .controller('MainCtrl', function($scope, $rootScope) {

    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.slides = [{
                numer:0,
                image: "http://2.bp.blogspot.com/-898A0s0vTS8/UTov2KUtZRI/AAAAAAAAAUw/7gEnPlX_7_8/s1600/logo2.jpg",
                text: ""
            },
            {
                numer:1,
                image: "http://2.bp.blogspot.com/-898A0s0vTS8/UTov2KUtZRI/AAAAAAAAAUw/7gEnPlX_7_8/s1600/logo2.jpg",
                text: ""
            },
            {
                numer:2,
                image: "http://2.bp.blogspot.com/-898A0s0vTS8/UTov2KUtZRI/AAAAAAAAAUw/7gEnPlX_7_8/s1600/logo2.jpg",
                text: ""
            }];

        var slides = $scope.slides;	

     $scope.addSlide = function () {
        slides.push();
     };



     $scope.addSlide();



    });
