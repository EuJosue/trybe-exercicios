const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (array) => {
  return array.find((number) => (number % 5 === 0 && number % 3 === 0)) || 'Não há nenhum número divisível por 3 e 5 nesse array.'
};

// console.log(findDivisibleBy3And5(numbers));

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (array) => {
  return array.find((name) => (name.length === 5)) || 'Não há nenhum nome com exatamente 5 letras nesse array.'
};

// console.log(findNameWithFiveLetters(names));

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

function findMusic(id) {
  return musicas.find((music) => (id === music.id)) || 'Música não encontrada'
};

// console.log(findMusic('31031686'));