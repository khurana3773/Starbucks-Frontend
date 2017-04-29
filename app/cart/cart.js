'use strict';


var cart = angular.module('myApp.cart', ['ngRoute']);



    cart.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/cart', {
            templateUrl: 'cart/cart.html',
            controller: 'cartCtrl'
        });
    }])

    cart.controller('cartCtrl', ['$scope','$http',function($scope,$http) {

       // $scope.$apply($scope.itemss );
        $scope.init =     function () {

            $http({
                method: 'GET',
                url: 'http://localhost:9090/v3/starbucks/cart'
            }).then(function successCallback(response) {
                alert(response.data.items);



                $scope.itemss = [
                    {
                        "qty" : 3.0,
                        "name" : "BOBA1",
                        "milk" : "whole",
                        "size" : "XXXlarge"
                    },
                    {
                        "qty" : 3.0,
                        "name" : "BOBA2",
                        "milk" : "whole",
                        "size" : "XXXlarge"
                    }
                ];



                $scope.items = response.data.items;
            }, function errorCallback(response) {
                alert("Fail");
            });
        }





    }]);