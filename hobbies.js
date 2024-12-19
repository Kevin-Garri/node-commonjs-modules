// hobbies.js

// Funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree
// Restituisce un oggetto con una proprietà hobbies che è un array
function createHobbies(hobbyOne, hobbyTwo, hobbyThree) {
  return {
    hobbies: [hobbyOne, hobbyTwo, hobbyThree]
  };
}

// Esportazione della funzione
module.exports = createHobbies;