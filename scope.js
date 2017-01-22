var age = 24;

// global variable as this is created outside of any function
// if variable is created within a function it cannot be accessed anywhere else


function localFunction () {
	var age = 0; // this is an entirely separate var called 'age' (local, not global)

	age = 15; // js looks for which var you might mean and looks in the local function first
	console.log(age);
}

localFunction(); // running this first calls the age variable in the function
console.log(age); // then console.logs the global var 'age' second
