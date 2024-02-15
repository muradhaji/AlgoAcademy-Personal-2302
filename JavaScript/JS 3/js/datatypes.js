//String
let str1 = "Hello 1"; //double quote
let str2 = 'Hello 2'; //single quote
let str3 = `Hello 3`; //backtick
let str4 = "I am " + (21 + 2) + " years old";
let str5 = 'I am ' + (21 + 2) + ' years old';
let str6 = `I am ${21 + 2} years old.`;
let str7 = "I am ${21 + 2} years old.";

//Boolean
let bool1 = 4 < 5;
let bool2 = 4 > 5;
let bool3 = true;
let bool4 = false;

//Undefined
let x;
let x2 = 5;
x2 = undefined;

//Null
let y = null;

//Object
//let userName = "John";
//let userAge = 25;
//let userMarried = true;

//let userName2 = "Mike";
//let userAge2 = 16;
//let userMarried2 = false;

let user1 = {
  "name": "John",
  "age": 25,
  "married": true,
  "university": {
    "name": "BDU",
    "city": "Baku",
    "createdYear": 1950,
  }
};

let user2 = {
  "name": "Mike",
  "age": 16,
  "married": false,
};

let g = 5;
let h = 9n;
let k = Symbol();

console.log(typeof(g));
console.log(typeof h);
console.log(typeof str1);
console.log(typeof bool3);
console.log(typeof x);
console.log(typeof y);
console.log(typeof user1);
console.log(typeof k);








