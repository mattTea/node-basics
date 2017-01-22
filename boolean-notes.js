var isValid = false;

// toggle a boolean
// isValid = !isValid;

// when using === it resolves (outputs to command prompt) to true/false
// therefore === not required as we are already passing in booleans (see 'if' statement below)

console.log('a' === 'b');


// when running if statement can also leave off the === true validation
// 'if (isValid === true)' is the same as 'if (isValid)'

if (!isValid) {
	console.log('Data is valid!');
} else {
	console.log('Data is not valid!')
}

// can use 'if (!isValid)' to flip var value directly in if statement




/*
create function toggleBoolean
only argument is boolean variable - if true: set to false, if false: set to true
(can use if statement in function or use the ! flipper)
return new value and log to the screen

only do if the variable value is a boolean operator (true or false)
do nothing if passing in strings, etc.
(create if statement in function, and only flip if the variable is a boolean)

need to check type of variable - research this (stack overflow, etc)
*/


// my attempt...

var operator = true;

function toggleBoolean (operator) {
	if (typeof operator === "boolean" && true) {
	console.log(!operator);
	} else if (operator === "boolean" && false) {
		console.log(!operator);
	} else {
		console.log(operator)
	}
}

toggleBoolean(true);
toggleBoolean(false);
toggleBoolean('elephant');


//first model answer (without checking boolean typeof)...

var isValid = false;

function toggleBoolean (booleanVar) {
	if (booleanVar === true) {
		return false;
	} else if (booleanVar === false) {
		return true;
	}
}


// true model answer...

var isValid = false;

function toggleBoolean (booleanVar) {
	if (typeof booleanVar === 'boolean') {
		return !booleanVar;
	} else {
		console.log('Warning! Not a boolean.');
	}
}

var newBoolean = toggleBoolean(isValid);
console.log(newBoolean);