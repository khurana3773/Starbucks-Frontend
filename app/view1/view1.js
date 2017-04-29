'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$http',function($scope,$http) {



  $scope.test = "hello";
    $scope.callMe = callme;

  function callme() {

      $http({
          method: 'GET',
          url: 'http://localhost:9090/v3/starbucks/order/694e50b2-2c9d-4db2-8a2a-fde9ff0cdd9a'
      }).then(function successCallback(response) {
          alert(response.data.location);
      }, function errorCallback(response) {
          alert("Fail");
      });
  }


    var dataObj = {
        "location": "take-ouxt",
        "items": [
        {
            "qty": 1,
            "name": "latte",
            "milk": "whole",
            "size": "large"
        }
    ]
    };


    $scope.createOrder =  function () {

        var res = $http.post('http://localhost:9090/v3/starbucks/order', dataObj);
        res.success(function(data, status, headers, config) {
            alert( "Success message: " +status + JSON.stringify({data: data}));
        });
        res.error(function(data, status, headers, config) {
            alert( "failure message: " + JSON.stringify({data: data}));
        });
    }


}]);