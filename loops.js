var i = 0;
var countLimit = 8;

// while loop
while (i < countLimit) {
	console.log('while: ' + i);
	i++; // same as i = i + 1
}

//for loop
for (i = 0; i < countLimit; i++) {  // 1: initialiser (only runs once); 2: condition; 3: final expression
	console.log('for: ' + i);
}


// create a function called countDown
// (startingPoint, stoppingPoint [less than starting point])


function countDownWhile (startingPoint, stoppingPoint) {
	while (startingPoint >= stoppingPoint) {
		console.log('countdownwhile: ' + startingPoint);
		startingPoint--;
	}
}

countDownWhile(20, 7);


function countDownFor (startingPoint, stoppingPoint) {
	for (; startingPoint >= stoppingPoint; startingPoint--) { // don't need initialiser!
		console.log('countdownfor: ' + startingPoint);
	}
}

countDownFor(35, 5);


// forEach can only be used over an array, but while and for loops can be used over anything
