'use strict';

/**
 * @ngdoc function
 * @name revealUiApp.controller:UniversalCtrl
 * @description
 * # UniversalCtrl
 * Controller of the revealUiApp
 */
angular.module('revealUiApp')
  .controller('UniversalCtrl', function ($scope) {

  	var metrics = {
    	datapoints : [
    		{"row_no":1, "metric_name": "Daily Average Users", "source":"MySQL", "anomalies":4, "recent_anomaly":"3 hrs ago"},
    	 	{"row_no":2, "metric_name": "Monthly Average Users", "source":"MySQL", "anomalies":3, "recent_anomaly":"10 mins ago"}, 
    	 	{"row_no":3, "metric_name": "Customer Lifetime Value", "source":"MySQL", "anomalies":null, "recent_anomaly":null}
    	]
    };

  	$scope.metrics = metrics;

  	var db = {"type":"MySQL","name":null,"username":null,"password":null};
    
    $scope.db = db;

    $scope.isCreateDisabled = function() {
    	if ( (!db.name) || (!db.username) || (!db.password) )
    		return true;
    	else
    		return false;
    };

    $scope.addMetric = function(metricName, metricDesc, keymetric, aggregation, tsfield, frequency){
		var datapoint = {};
		datapoint.row_no = metrics.datapoints.length + 1;
		datapoint.metric_name = metricName;
		datapoint.source = "MySQL";
		datapoint.anomalies = 1;
		datapoint.recent_anomaly = "Few seconds ago";
		metrics.datapoints.push(datapoint);
	};

  });
