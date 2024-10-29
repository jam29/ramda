
const R = require('ramda');
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 20 }
];

const sortByAgeAndName = R.sortWith([
  R.ascend(R.prop('age')),
  R.ascend(R.prop('name'))
], users);

console.log(sortByAgeAndName);
// Résultat : tableau trié par `age` en premier, puis par `name` si les âges sont égaux.

