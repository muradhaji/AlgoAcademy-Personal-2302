// Correct way (whole file)
//"use strict";

message = "Hello";
console.log(message);

//"use strict"; // Not activated

function sumOfTwo() {
	"use strict";
	x = 1, y = 2;
	//"use strict"; // Not activated
	console.log(x + y);
}

sumOfTwo();