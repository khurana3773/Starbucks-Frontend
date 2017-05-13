'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'Home/home.html',
    controller: 'homeCtrl'
  });
}])


.service('sharedProperties', function () {
    var store = '';
    var order = '';
    return {
        getProperty: function () {
            return store;
        },
        setProperty: function(value) {
            store = value;
        },
        getOrderProperty: function () {
            return order;
        },
        setOrderProperty: function(orderIn) {
            order = orderIn;
        }
    };
})
    .controller('homeCtrl', ['$scope','sharedProperties',function($scope,sharedProperties) {

        $scope.setStore = function (value) {
            sharedProperties.setProperty(value);
            alert(value);
        };

    }]);