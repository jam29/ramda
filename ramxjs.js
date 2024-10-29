const { from } = require('rxjs');
const { map } = require('rxjs/operators');
const R = require('ramda');

// Function to fetch user data
const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
};

// Transform user data using Ramda
const transformUser = R.pipe(
  R.pick(['id', 'name', 'email']), // Pick only the id, name, and email
  R.assoc('isActive', true) // Add a new property
);

// Create an observable from the fetch function
const users$ = from(fetchUsers()).pipe(
  map(R.map(transformUser)) // Transform each user in the array
);

// Subscribe to the observable
users$.subscribe({
  next: (users) => console.log(users),
  error: (err) => console.error(err),
});

