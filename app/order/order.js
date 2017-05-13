'use strict';


var order = angular.module('myApp.order', ['ngRoute'])

order.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/order', {
        templateUrl: 'order/order.html',
        controller: 'orderCtrl'
    });
}])

order.controller('orderCtrl', ['$scope','$http','$window','sharedProperties','sharedOrder',function($scope,$http,$window,sharedProperties,sharedOrder) {

    $scope.init = function () {
        $scope.showAllItems();
        //alert(sharedProperties.getProperty());
        //alert()
    };

    $scope.setOrder = function (value) {
        sharedProperties.setOrderProperty(value);
        alert(value);
    };

    $scope.showAllItems =  function () {

        $http({
            method: 'GET',
            url: 'http://34.209.93.162:9090/v3/'+sharedProperties.getProperty()+'/starbucks/order/'+sharedProperties.getOrderProperty()
        }).then(function successCallback(response) {
            alert("cart received");


            $scope.order = response.data;
        }, function errorCallback(response) {
            alert("Fail"+sharedProperties.getOrderProperty());
        });
    };


}]);