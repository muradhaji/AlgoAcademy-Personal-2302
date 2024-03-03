// object constructor
// let user = new Object();

// object literal
// let user = {};

// property_name: property_value,
// let user = { name: 'John', age: 30, isAdmin: true, 'last name': 'Doe' };

// user.height = 180;

// user.name = 'Mike';

// user['last name'] = 'Anderson';

// delete user.age;
// delete user['last name'];
// delete user['isAdmin'];

// let key = 'nationality';
// user[key] = 'AZ';
// user.key = 'AZ';

// let userKey = prompt('Enter property name:');
// let userValue = prompt('Enter property value:');

// user[userKey] = userValue;

// let user = { [userKey]: userValue };

// function makeUser(name, age) {
//   let x = { name: name, age: age };
//   return x;
// }

// function makeUser(name, age) {
//   return { name: name, age: age };
// }

// function makeUser(name, age) {
//   return { name, age };
// }

// function makeUser(userName, userAge) {
//   return { name: userName, age: userAge };
// }

// let user = makeUser('John', 30);

// user.isMarried = true;
// user.isMArried = false;

// console.log('age' in user);
// console.log('isMarried' in user);

// for (propertyName in user) {
//   console.log(user[propertyName]);
// }

// let arr = ['John', 30];
// let str = 'This is a sentence.';
// let num = String(2390);

// let codes = {
//   name: 'John',
//   age: 25,
//   // 90: 'Turkey',
//   // 49: 'Germany',
//   // 994: 'Azerbaijan',
//   // 41: 'Switzerland',
//   // 1: 'USA',
//   '+90': 'Turkey',
//   '+49': 'Germany',
//   '+994': 'Azerbaijan',
//   '+41': 'Switzerland',
//   '+1': 'USA',
// };

// console.log(codes);

// for (propName in codes) {
//   console.log(propName);
// }

// Reference copying
// let user = { name: 'John', age: 30 };
// let user2 = user;
// user2.name = 'Mike';
// console.log(user);
// console.log(user2);

// let createObjCopy = (sourceObj) => {
//   let newObj = {};
//   for (prop in sourceObj) {
//     if (typeof sourceObj[prop] == 'object') {
//       newObj[prop] = createObjCopy(sourceObj[prop]);
//     } else {
//       newObj[prop] = sourceObj[prop];
//     }
//   }
//   return newObj;
// };

// let user = { name: 'John', age: 30 };
// // let user2 = createObjCopy(user);

// let user2 = {};
// Object.assign(user2, user);

// user2.name = 'Mike';

// console.log(user);
// console.log(user2);

// let user = {
//   name: 'John',
//   age: 30,
//   university: {
//     name: 'BDU',
//     city: 'BAKU',
//   },
//   saySelfName: function () {
//     alert(`My name is ${this.name}, I study at ${this.university.name}`);
//   },
// };

// // let user2 = {};
// // Object.assign(user2, user);

// let user2 = createObjCopy(user);

// // let user2 = structuredClone(user);

// user2.name = 'Mike';
// user2.university.name = 'ADA';

// user.saySelfName();
// user2.saySelfName();

// console.log(user);
// console.log(user2);

// const user = { name: 'John', age: 30 };
// user = { name: 'Mike', age: 27 };
// // user.name = 'Mike';

// console.log(user);

// let hifunc = () => {
//   console.log(`Hi my name is ${this.name}, I am ${this.age} years old`);
// };
// let hifunc = function () {
//   console.log(`Hi my name is ${this.name}, I am ${this.age} years old`);
// };

// let user = {
//   name: 'John',
//   age: 29,
//   // sayHi: () => {
//   //   console.log(`Hi my name is ${this.name}, I am ${this.age} years old`);
//   // },
//   // sayHi: function () {
//   //   console.log(`Hi my name is ${this.name}, I am ${this.age} years old`);
//   // },
//   // sayHi: hifunc,
// };

// user.sayHi = hifunc;
// user.sayHi = () => {
//   console.log(`Hi my name is John, I am 29 years old`);
// };

// user.sayHi();


// 367
// 763

// x   y
// 0   367
// 7   36
// 76  3
// 763 0
