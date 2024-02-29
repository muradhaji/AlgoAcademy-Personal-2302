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

let codes = {
  name: 'John',
  age: 25,
  // 90: 'Turkey',
  // 49: 'Germany',
  // 994: 'Azerbaijan',
  // 41: 'Switzerland',
  // 1: 'USA',
  '+90': 'Turkey',
  '+49': 'Germany',
  '+994': 'Azerbaijan',
  '+41': 'Switzerland',
  '+1': 'USA',
};

console.log(codes);

for (propName in codes) {
  console.log(propName);
}
