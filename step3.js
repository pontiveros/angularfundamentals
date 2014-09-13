
var app = angular.module('Application03', []);

app.controller('dioneController', ['$scope', function($scope) {
	$scope.items = ['General Dynamics', 'Mc Donnell Douglas', 'Dessault Breguet', 'Boeing Vertol', 'Bell Textron'];
}]);

app.controller('inputWatchController', ['$scope', function($scope) {
	$scope.$watch('sniffInput', function(value) {
		if (value && value.length > 0) {
			if (value > 100) {
				alert('Value cannot be bigger than 100.'); 
			}
		}
	});
}]);

app.directive('dioneDirective', function() {
	return {
		template: '<div>Hello Pedro Ontiveros.</div>'
	};
});

