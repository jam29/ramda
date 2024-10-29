const R = require('ramda');
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 20 }
];

// Tri ascendant par `age`
const sortByAgeAsc = R.sort(R.ascend(R.prop('age')), users);
console.log(sortByAgeAsc);
// [
//   { name: 'Charlie', age: 20 },
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 }
// ]

// Tri descendant par `name`
const sortByNameDesc = R.sort(R.descend(R.prop('name')), users);
console.log(sortByNameDesc);
// [
//   { name: 'Charlie', age: 20 },
//   { name: 'Bob', age: 30 },
//   { name: 'Alice', age: 25 }
// ]

