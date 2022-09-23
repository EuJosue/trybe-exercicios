const removeAccent = (string) => string.normalize('NFD').replace(/[^a-zA-Z_.!?,\s]/g, '');
// ref: https://blog.dbins.com.br/remover-acentos-e-caracteres-especiais-com-javascript;

const newEmailWithUnderline = (name) => {
  const employee = {
    nomeCompleto: name,
    email: `${removeAccent(name.toLowerCase().replaceAll(' ', '_'))}@trybe.com`,
  }
  return employee;
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

// console.log(newEmployees(newEmailWithUnderline));

const checkIfEqual = (subject1, subject2) => (subject1 === subject2) ? true : false;

const raffle = (bet, callback) => {
  const randomNumber = Math.ceil(Math.random() * 5);
  console.log(randomNumber)
  if (callback(bet, randomNumber)) return 'Parabéns você ganhou'
  return 'Tente novamente'
};

// console.log(raffle(5, checkIfEqual));

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkIfEqualOrNA = (subject1, subject2) =>{
  if (subject2 === 'N.A') return 0;
  return (subject1 === subject2) ? 1 : 0.5;
}

const autoCorrector = (correctAnswers, testAnswers, callback) => {
  let score = 0;
  for (let index = 0; index < correctAnswers.length; index += 1) {
    score += callback(correctAnswers[index], testAnswers[index]);
  }
  return score;
};

// console.log(autoCorrector(RIGHT_ANSWERS, STUDENT_ANSWERS, checkIfEqualOrNA))
