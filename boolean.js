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

// see boolean-notes.js for my answer, which also worked-ish


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


// work out why the need for vars 'newBoolean' and 'isValid'
// also the argument 'booleanVar' is not defined anywhere?
/* actually it looks like the var 'newBoolean' is calling the function 'toggleBoolean',
   using the value of the var 'isValid' for the argument 'booleanVar' */