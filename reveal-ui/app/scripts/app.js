'use strict';

/**
 * @ngdoc overview
 * @name revealUiApp
 * @description
 * # revealUiApp
 *
 * Main module of the application.
 */
angular
  .module('revealUiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/newmetric', {
        templateUrl: 'views/newmetric.html',
        controller: 'NewmetricCtrl'
      })
      .when('/metrics', {
        templateUrl: 'views/metrics.html',
        controller: 'MetricsCtrl'
      })
      .when('/graphs', {
        templateUrl: 'views/graphs.html',
        controller: 'GraphsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
