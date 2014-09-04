
var program = function() {

	console.log('init program...');


	// Self invocation...
	(function() {
		console.log('running anonymous function - closure.');
	})();

	var add = (function() {
		var counter = 0;
		return function() {
			return counter++; 
		}
	})();

	console.log(add());
	console.log(add());
	console.log(add());

	console.log('end of program.');

}

program();

// http://jsfiddle.net/fegu/qGFZ6/ 
// http://localhost:3000/?nativeMode=shell&os=ios