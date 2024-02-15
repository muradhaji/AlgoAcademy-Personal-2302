let a = 3;
let b = 10;
let c = 20;

// console.log(a < b || b > c); // true
// console.log(true || false); // true

// console.log(a < b || "Hello"); // true
// console.log(true || true); // true

// console.log(a > b || "Hello"); // "Hello"
// console.log(false || true); // true

// console.log(a > b || "" || 45n); // 45n
// console.log(false || false || true); // true

// console.log(a > b || "" || 45n || null); // 45n

// console.log(a > b || " " || null || 45n ); // " "

// console.log(a > b || "" || null || undefined ); // undefined






// if(a < b && b < c)
// if(true && true)

// console.log(0 && 5);
// console.log(false && true);

// console.log(5 && 0);
// console.log(true && false);

// console.log(5 && "qwe" && null && 34n); // null
// console.log(true && true && false && true); //false

// console.log(5 && " " && Infinity && 34n); // null




// let name1;
// let name2 = null;
// let name3 = "John";

// console.log(0 || name1 || name2 || name3);
// console.log(0 && name1 && name2 && name3);


// console.log(name1 ?? name2 ?? name3);
// console.log(0 ?? name1 ?? name2 ?? name3);
// console.log(null ?? name2 ?? name1);

let num = Number(prompt("Enter number"));

// num < 0 || alert("Positive");
// num > 0 || alert("Negative");

num < 0 && alert("Negative");
num > 0 && alert("Positive");