// function powFucn(x, y) {
//   return x ** y;
// }

// let myMath = {
//   PI: 3.14,
//   pow: powFucn,
//   root: function (x, y) {
//     return this.pow(x, 1 / y);
//   },
//   circle: function (r) {
//     return 2 * this.PI * r;
//   },
// };

// console.log(myMath.PI);
// console.log(myMath.pow(5, 2));
// console.log(myMath.circle(2));
// console.log(myMath.root(27, 3));

// function createUser(name, age) {
//   return {
//     name,
//     age,
//   };
// }

// let user = createUser('John', 27);
// let user2 = createUser('Mike', 42);

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let user = new User('John', 27);
// let user = User('John', 27); // wrong

// console.log(user);

// let user = {
//   name: 'John',
//   univercity: {
//     name: 'BDU',
//     city: 'Baku',
//   },
//   // sayName: function () {
//   //   console.log(`Hi my name is ${this.name}`);
//   // },
// };

// let user;

// console.log(user.univercity.name);
// console.log(user.univercity ? user.univercity.name : undefined);
// console.log(user?.univercity?.name);
// user.sayName?.();

// let sayHi = function () {
//   console.log('Hi Friend!');
// };
// let sayHi;

// sayHi?.();

// let id = Symbol();
// let id = Symbol('user id');

// let user = { name: 'John', age: 27, id: 13 };

// let fid = Symbol('facebook id');
// let iid = Symbol('instagram id');
// let iid2 = Symbol('instagram id');

// user[fid] = 42;
// user[iid] = 84;
// user[iid2] = 119;

// console.log(user);
// console.log(user.id);
// console.log(user[fid]);
// console.log(user[iid]);
// console.log(user[iid2]);
// console.log(fid.description);

// let user = {
//   // length: function () {
//   //   let i = 0;
//   //   for (key in this) {
//   //     if (typeof this[key] !== 'function') {
//   //       i++;
//   //     }
//   //   }
//   //   return i;
//   // },
//   [Symbol.toPrimitive]: function (hint) {
//     if (hint == 'string') {
//       return this.name;
//     } else if (hint == 'number') {
//       return this.age;
//     }
//   },
//   name: 'John',
//   age: 27,
// };

// console.log(Number(user));
// console.log(String(user));

// let x = 255;

let bankNotes = [
  {
    value: 200,
    count: 1,
  },
  {
    value: 100,
    count: 0,
  },
  {
    value: 50,
    count: 5,
  },
  {
    value: 20,
    count: 4,
  },
  {
    value: 10,
    count: 0,
  },
  {
    value: 5,
    count: 3,
  },
  {
    value: 1,
    count: 3,
  },
];
