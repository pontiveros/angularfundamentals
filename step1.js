angular.module("pilotApp", [])
	.controller("pilotController", ['$scope', function () {
		$scope.showAlert = function() {
			alert ('Hello Pedro Ontiveros');
		}
	}]);
