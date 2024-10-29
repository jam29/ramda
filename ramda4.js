const R = require('ramda');
const user = { name: 'Alice', age: 25 };
const newUser = R.assoc('age', 26, user);

console.log(user); // { name: 'Alice', age: 25 }
console.log(newUser); // { name: 'Alice', age: 26 }

