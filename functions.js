// function name has one or more arguments (a and b below)

// function then does something {a variable called result = a+b, which is then returned}

// create/call variable 'result' (don't need to use var keyword in this) which is equal to the function 'add' with arguments of value 1 & 88
// alternatively can consol.log the add function with arguments 'in line' (row 20)




function add (a, b) {
	var result = a + b

	return result;
}

var result = add(1, 88);
console.log(result);

console.log(add(3, 2));

result = add(3, 67);
console.log(result);

console.log(add(4, 56));
