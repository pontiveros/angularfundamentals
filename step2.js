angular.module('myApp', [])
	.controller('myController', ['$scope', function ($scope) {
		$scope.list = [ {text: 'Step 1 AngularJS', done:true}, {text:'Step 2 AngularJS', done:false} ];
		
	}]);