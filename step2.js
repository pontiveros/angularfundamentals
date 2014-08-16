angular.module('myApp', [])
	.controller('myController', ['$scope', function ($scope) {
		$scope.todoList = [ {text: 'Step 1 AngularJS', done:true}, {text:'Step 2 AngularJS', done:false} ];
		
		$scope.remaining = function () {
			var count = 0;
			angular.forEach($scope.todoList, function(item) {
				count += item.done ? 0 : 1;
			});
			return count; 
		};

		$scope.addTodo = function() {
			if ($scope.todoText.length > 0) {
				$scope.todoList.push({text:$scope.todoText, done:false});
				$scope.todoText = '';
			} else {
				alert('Text is empty');
			}
		};

	}]);