
var globalScope = function() {
	console.log('Global function it belong to window object.');

	var method_1 = function() {
		console.log('Method 1 is running.');

		var method_2 = function (value) {
			console.log('Method 2 is running, value: .' + value);
			
			var method_3 = function() {
				console.log('Method 3 is running... and back.');
			};

			method_3();
		}

		method_2(10);
	}

	method_1();
};



// How to declare a class in javascript, there is another ways too.
function Entity (value) {
	this.name = value;
	this.code = 0;

	this.getInfo = function () {
		return 'Name: ' + this.name + ' Code: ' + this.code;
	}
}

function testEntity () {
	var  a = new Entity('Pedro');
	a.code = 1000;

	console.log(a.getInfo());
}

testEntity();

// Singleton 

var customer  = new function () {
	this.name  = 'Ramiro';
	this.code  = 1001;
	this.price = 192.23;

	product = 'wine';

	this.getInfo = function () {
		return 'Name: ' + this.name + '\nCode: ' + this.code + '\nPrice: ' + this.price;
	}
}

function testCustomer () {
	console.log(this);
	console.log(product);
	console.log(customer.getInfo());
}

testCustomer();


var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

add();
add();
add();
