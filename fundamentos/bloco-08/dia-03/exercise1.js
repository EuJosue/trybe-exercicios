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

function formatedBookNames(arr) {
  return arr.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
}

// console.log(formatedBookNames(books));
/*
[
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];
*/

function nameAndAge(arr) {
  return arr.map((book) => ({
    age: book.releaseYear - book.author.birthYear,
    author: book.author.name,
  })).sort((a, b) => a.age - b.age);
}

// console.log(nameAndAge(books));
/*
[
  { age: 31, author: 'Isaac Asimov' },
  { age: 38, author: 'H. P. Lovecraft' },
  { age: 39, author: 'Stephen King' },
  { age: 43, author: 'George R. R. Martin' },
  { age: 45, author: 'Frank Herbert' },
  { age: 62, author: 'J. R. R. Tolkien' }
]
*/

function fantasyOrScienceFiction(arr) {
  return arr.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');
}

// console.log(fantasyOrScienceFiction(books));
/*
[
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965
  }
]
*/

function oldBooksOrdered(arr) {
  return arr.filter((book) => (2022 - book.releaseYear) >= 60).sort((a, b) => a.releaseYear - b.releaseYear);
}

// console.log(oldBooksOrdered(books));
/*
[
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954
  }
]
*/

function fantasyOrScienceFictionAuthors(arr) {
  return fantasyOrScienceFiction(arr).map((book) => book.author.name).sort();
}

// console.log(fantasyOrScienceFictionAuthors(books));
/*
[
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien'
]
*/

function oldBooks(arr) {
  return arr.filter((book) => (2022 - book.releaseYear) >= 60).map((book) => book.name)
}

// console.log(oldBooks(books)); // [ 'O Senhor dos Anéis', 'Fundação', 'O Chamado de Cthulhu' ]

function authorWith3DotsOnName(arr) {
  return arr.filter((book) => (book.author.name.match(/\./g) || []).length === 3).map((book) => book.name).toString();
}

// console.log(authorWith3DotsOnName(books)); // 'O Senhor dos Anéis'
