'use strict';

// Declare app level module which depends on views, and components
var starbucksApp = angular.module('myApp', [
  'ngRoute',
  'myApp.store1',
  'myApp.home',
  'myApp.cart',
  'myApp.version'
]);

starbucksApp.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider

      .when('/', {
        templateUrl : 'Home/home.html',
          controller : 'homeCtrl'

      }) ;


  $routeProvider.otherwise({redirectTo: '/home'});
}]);
