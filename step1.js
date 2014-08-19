angular.module("pilotApp", [])
	.controller("pilotController", ['$scope', function ($scope) {
		$scope.showAlert = function() {
			alert ('Hello Pedro Ontiveros');
		}
	}]);
