// create object using variable
// object has attributes using dot (.) notation or [''] notation


// create a function name with at least one argument (in the below case the variable 'pet')

// then function needs to do something (console.log a string in the below)

// function and arguments are then called to run the function



var pet = {};

pet.name = 'Bootsie';
pet.type = 'cat';

function printPet (pet) {
	console.log('You own a ' + pet.type + ' thats name is ' + pet.name)
}

printPet(pet);
printPet(pet);
