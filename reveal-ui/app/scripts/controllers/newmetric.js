'use strict';

/**
 * @ngdoc function
 * @name revealUiApp.controller:NewmetricCtrl
 * @description
 * # NewmetricCtrl
 * Controller of the revealUiApp
 */
angular.module('revealUiApp')
  .controller('NewmetricCtrl', function ($scope) {

  	var tables = [
      {"name":"ClickstreamTB", "selected":false},
      {"name":"CriminalCasesTB", "selected":false},
      {"name":"AirlineBookingTB", "selected":false}
    ];
    
    $scope.tables = tables;

    $scope.fields = [
    	{"name":"time", "associated":false},
    	{"name":"airline", "associated":false},
    	{"name":"response-time", "associated":false},
    	{"name":"source-type", "associated":false}
    ];

    $scope.metricName = null;
    $scope.metricDesc = null;
    $scope.keymetric = null;
    $scope.tsfield = null;
    $scope.aggregation = "None";
    $scope.frequency = null;
   
    $scope.isTableSelected = function(){
    	var result = false;
    	for (var idx in tables){
    		if (tables[idx].selected) {
    			result = true;
    		}
    	}
    	return result;
    };

  });
