const R = require('ramda');
const numbers = [5, 1, 7, 3, 2];

// Tri ascendant
const sortedAsc = R.sort((a, b) => a - b, numbers);
console.log(sortedAsc); // [1, 2, 3, 5, 7]

// Tri descendant
const sortedDesc = R.sort((a, b) => b - a, numbers);
console.log(sortedDesc); // [7, 5, 3, 2, 1]
