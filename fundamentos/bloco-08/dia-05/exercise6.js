const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const toObject = ([name, brand, releaseYear]) => ({
  name,
  brand,
  releaseYear,
});

// console.log(toObject(palio)); // { name: 'Palio', brand: 'Fiat', releaseYear: 2019 };

// console.log(toObject(shelbyCobra)); // { name: 'Shelby Cobra', brand: 'Ford', releaseYear: 1963 };

// console.log(toObject(chiron)); // { name: 'Chiron', brand: 'Bugatti', releaseYear: 2016 }
