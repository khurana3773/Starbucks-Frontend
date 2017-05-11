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
        $scope.init = function () {
           $scope.showAllItems();
        }


        $scope.showAllItems =     function () {

            $http({
                method: 'GET',
                url: 'http://localhost:9090/v3/starbucks/cart'
            }).then(function successCallback(response) {
   //             alert("cart received");


                $scope.order = response.data;
            }, function errorCallback(response) {
                alert("Fail");
            });
        }


        $scope.dataObj = {
                    "qty": 10,
                    "name": "latte",
                    "milk": "whole",
                    "size": "large"
        };

        $scope.removeItem = function(index)
        {
            $scope.order.items.splice(index,1);
            var res = $http.post('http://localhost:9090/v3/starbucks/cart', $scope.order);
            res.success(function(data, status, headers, config) {
     //           alert( "Success message: " +status + JSON.stringify({data: data}));
            });
            res.error(function(data, status, headers, config) {
                alert( "failure message: " + JSON.stringify({data: data}));
            });
        }

        $scope.addItem = function()
        {

            var tempOrder = $scope.order;


            $scope.order.items.push($scope.dataObj);

            var res = $http.post('http://localhost:9090/v3/starbucks/cart', $scope.order);
            res.success(function(data, status, headers, config) {
     //           alert( "Success message: " +status + JSON.stringify({data: data}));
                //$scope.order.items.splice(0,0,$scope.dataObj);
                $scope.showAllItems();

            });
            res.error(function(data, status, headers, config) {
                alert( "failed to add: " + JSON.stringify({data: data}));
            });



        }




        $scope.pay = function()
        {

            var tempOrder = $scope.order;




            var res = $http.post('http://localhost:9090/v3/starbucks/cart', $scope.order.id);
            res.success(function(data, status, headers, config) {
                //           alert( "Success message: " +status + JSON.stringify({data: data}));
                //$scope.order.items.splice(0,0,$scope.dataObj);

            });
            res.error(function(data, status, headers, config) {
                alert( "failed to add: " + JSON.stringify({data: data}));
            });



        }






    }]);