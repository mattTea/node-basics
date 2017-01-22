function greetMaker (name) {
	function greet () {
		console.log('Hello ' + name + '!');
	}

	return greet;
}

var greetMatt = greetMaker('Matt');
greetMatt();
greetMatt();
greetMatt();

var greetWorld = greetMaker('world');
greetWorld();

// closure is about defining functions that have access to parent function variables
// variables scope



/* create function createAdder(baseNumber)
	return a function (numberToAdd)
		add up baseNumber & numberToAdd
		return result
*/


function createAdder (baseNumber) {
	return function (numberToAdd) {
		return baseNumber + numberToAdd;
	}
}

var addTen = createAdder(10);
console.log(addTen(3));
console.log(addTen(15));