// people.js

// Importazione delle funzioni dai moduli precedenti
const createName = require('./names');
const createHobbies = require('./hobbies');

const createPerson = () => {
  const { hobbies } = createHobbies('leggere', 'scrivere', 'giocare');
  return {
    createName: createName('Massimo', 'Simone'),
    hobbies
  }
}


console.log(createPerson());

