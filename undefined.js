// recreate greetUser function, but allow for name to be undefined
// if name exists: Hello 'Matt'! (eg)
// if undefined: Hello world!


function greetUser(name) {
	if (typeof name === 'undefined') {
		console.log('Hello world!');
	} else {
		console.log('Hello ' + name + '!');
	}
}

greetUser('Matt');
greetUser();


// by using 'undefined' we can create optional arguments for our function