const axios = require('axios');
const R = require('ramda');

// Fonction pour récupérer la liste des utilisateurs
const fetchUsers = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
};

// Fonction pour extraire les noms des utilisateurs
const extractNames = R.map(R.prop('name'));

// Fonction principale
const main = async () => {
  try {
    const users = await fetchUsers();
    const names = extractNames(users);
// names est un tableau
    console.log(names); // Affiche la liste des noms
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs:', error);
  }
};

// Appeler la fonction principale
main();

