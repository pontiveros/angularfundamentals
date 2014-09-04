
var app = angular.module("pilotApp", ['ngRoute']); // dependences in the brackets

app.config(function($routeProvider) {
	$routeProvider.when('/', 
		{
			controller  : 'customerController',
			templateUrl : './views/customers.html'
		}).when('/orders',
		{
			controller  : 'ordersController',
			templateUrl : './views/orders.html'
		});
});

app.controller("pilotController", ['$scope', function ($scope) {
	$scope.showAlert = function() {
		alert ($scope.name);
	}
}]);

app.controller("ordersController", function($scope) {
	// document.write("Hello Pedro Ontiveros");
	// $scope.customerId = 5;
});

app.controller("customerController", function($scope) {
	$scope.placeholderCustom = "Puta madre...";
	$scope.customers = [
		{"id":1, "name":"Buenos Aires", "total":52.636}, 
		{"id":2, "name":"Santa Fe", "total":32.660}, 
		{"id":3, "name":"Salta", "total":12.687}, 
		{"id":4, "name":"Jujuy", "total":24.146}, 
		{"id":5, "name":"Mendoza", "total":32.607}, 
		{"id":6, "name":"Cordoba", "total":14.104}, 
		{"id":7, "name":"Formosa", "total":16.184}, 
	];
});
