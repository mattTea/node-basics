// an array is a list
// anything you can define as a variable can be put inside an array


var grades = [100, 50];

grades.push(79);
grades.unshift(66);

var grade = grades.pop();
var gradeX = grades.shift();

console.log(gradeX);
console.log(grade);
console.log(grades);


// methods use dot notation and require parenteses ()

// 'push' is a method which adds an item to an array
// 'unshift' adds item to start of array
// 'pop' is a method that removes the last item in an array
// 'shift' is a method that removes the first item in an array


var grades2 = [100, 50, 75];

grades2.push(97);

grades2.forEach(function (grade3) {
	console.log(grade3);
});


// forEach takes as an argument a function, and gets called for every item in the array
// forEach iterates over the elements

// question: why do we not need to specify the grade3 argument anywhere?


console.log(grades2[2]);

// pull out an item at a specific index or position (e.g find first item in array)
// zero (0) is the first index in an array


console.log(grades2.length);

// total number of items in an array