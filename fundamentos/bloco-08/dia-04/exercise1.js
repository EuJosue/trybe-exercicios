const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(arr) {
  return arr.reduce((acc, curr) => acc.concat(curr), []);
}

// console.log(flatten(arrays)); // ['1', '2','3', true, 4, 5, 6]

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// function reduceNames(arr) {
//   return arr.map((book) => book.author.name).reduce((acc, curr) => acc.concat(',\n', curr))
// }

function reduceNames(arr) {
  return arr.reduce((acc, book) =>  `${acc} ${book.author.name};\n`, '')
}

// console.log(reduceNames(books));
/*
George R. R. Martin,
J. R. R. Tolkien,
Isaac Asimov,
Frank Herbert,
Stephen King,
H. P. Lovecraft
*/

function averageAge(arr) {
  return arr.reduce((acc, curr) => (acc + (curr.releaseYear - curr.author.birthYear)), 0) / arr.length;
}

// console.log(averageAge(books)); // 43

function longestNamedBook(arr) {
  return arr.reduce((acc, curr) => acc.name.length < curr.name.length ? curr : acc).name;
}

// console.log(longestNamedBook(books)); // As Crônicas de Gelo e Fogo

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

function containsA(arr) {
  return arr.reduce((acc, curr) => acc + curr).toLowerCase().match(/a/g).length;
}

// console.log(containsA(names)); // 20

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(studentsArr, gradesArr) {
  return studentsArr.map((student, index) => ({
    name: student,
    average: gradesArr[index].reduce((acc, curr) => acc + curr) / gradesArr[index].length,
  }));
}

console.log(studentAverage(students, grades));
