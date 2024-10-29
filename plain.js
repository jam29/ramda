
const people = [
  { name: "Alice", age: 25, active: true },
  { name: "Bob", age: 35, active: false },
  { name: "Charlie", age: 30, active: true },
  { name: "Dave", age: 40, active: true },
];

// Plain JavaScript filter for debugging
const activePeople = people.filter(person => person.active);
console.log("Active people (plain JS):", activePeople);

const ages = activePeople.map(person => person.age);
console.log("Ages of active people (plain JS):", ages);

const averageAge = ages.length ? ages.reduce((sum, age) => sum + age, 0) / ages.length : 0;
console.log("Average age of active people (plain JS):", averageAge);

