'use strict';


var cart = angular.module('myApp.cart', ['ngRoute']);




    cart.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/cart', {
            templateUrl: 'cart/cart.html',
            controller: 'cartCtrl'
        });
    }])

    cart.controller('cartCtrl', ['$scope','$http','$window','sharedProperties',function($scope,$http,$window,sharedProperties) {
        $scope.products = ["Latte","Chai","Boba","Coffee","Hot Chocolate"];
        $scope.milkType = ["Whole","Half n Half","Skim","None"];
        $scope.size = ["Small","Regular","Large","Extra Large"];
       // $scope.$apply($scope.itemss );
        $scope.init = function () {
           $scope.showAllItems();
           //alert(sharedProperties.getProperty());
           //alert()
        }


        $scope.showAllItems =     function () {

            $http({
                method: 'GET',
                url: 'http://34.209.93.162:9090/v3/'+sharedProperties.getProperty()+'/starbucks/cart'
            }).then(function successCallback(response) {
   //             alert("cart received");


                $scope.order = response.data;
            }, function errorCallback(response) {
                alert("Fail"+sharedProperties.getProperty());
            });
        }


        $scope.dataObj =
            {
                    "qty": "1",
                    "name": "",
                    "milk": "",
                    "size": ""
        };

        $scope.removeItem = function(index)
        {
            $scope.order.items.splice(index,1);
            var res = $http.post('http://34.209.93.162:9090/v3/'+sharedProperties.getProperty()+'/starbucks/cart', $scope.order);
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

            var res = $http.post('http://34.209.93.162:9090/v3/'+sharedProperties.getProperty()+'/starbucks/cart', $scope.order);
            res.success(function(data, status, headers, config) {
     //           alert( "Success message: " +status + JSON.stringify({data: data}));
                //$scope.order.items.splice(0,0,$scope.dataObj);
                $scope.showAllItems();

            });
            res.error(function(data, status, headers, config) {
                alert( "failed to add: " + JSON.stringify({data: data}));
            });

        }

//test

        $scope.updateCart = function()
        {
            var res = $http.put('http://34.209.93.162:9090/v3/'+sharedProperties.getProperty()+'/starbucks/cart', $scope.order);
            res.success(function(data, status, headers, config) {
                $scope.showAllItems();

            });
            res.error(function(data, status, headers, config) {
                alert( "failed to add: " + JSON.stringify({data: data}));
            });
        }









        $scope.confirmOrder = function()
        {

            $scope.order.status = 'PLACED';





            var res = $http.put('http://34.209.93.162:9090/v3/'+sharedProperties.getProperty()+'/starbucks/cart', $scope.order);
            res.success(function(data, status, headers, config) {
                $window.location.href = '';

            });
            res.error(function(data, status, headers, config) {
                alert( "failed to add: " + JSON.stringify({data: data}));
            });



        }






    }]);