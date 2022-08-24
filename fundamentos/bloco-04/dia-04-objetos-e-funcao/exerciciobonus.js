function romanToNumber(romanNum) {
  let valor = 0;
  for(let index = 0; index < romanNum.length; index += 1) {
    switch (romanNum[index]) {
      case "I":
        if(romanNum[index + 1] === "I" || romanNum[index + 1] === undefined) {
          valor += 1
        } else {
          valor -= 1
        }
      break
      case "V":
        if(romanNum[index + 1] === undefined || romanNum[index + 1] === "V" || romanNum[index + 1] === "I") {
          valor += 5
        } else {
          valor -= 5
        }
      break
      case "X":
        if(romanNum[index + 1] === undefined || romanNum[index + 1] === "X" || romanNum[index + 1] === "V" || romanNum[index + 1] === "I") {
          valor += 10
        } else {
          valor -= 10
        }
      break
      case "L":
        if(romanNum[index + 1] === undefined || romanNum[index + 1] === "L" || romanNum[index + 1] === "X" || romanNum[index + 1] === "V" || romanNum[index + 1] === "I") {
          valor += 50
        } else {
          valor -= 50
        }
      break
      case "C":
        if(romanNum[index + 1] === "D" || romanNum[index + 1] === "M") {
          valor -= 100
        } else {
          valor += 100
        }
      break
      case "D":
        if(romanNum[index + 1] === "M") {
          valor -= 500
        } else {
          valor += 500
        }
      break
      case "M":
        valor += 1000
      break
    } 
  }
  return valor
}

console.log(romanToNumber("CD"))

function arrayofNumbers(vector) {
  let numerosPares = [];
  for(let index = 0; index < vector.length; index += 1) {
    for(let indexInterno = 0; indexInterno < vector[index].length; indexInterno += 1) {
      if(vector[index][indexInterno] % 2 === 0) {
        numerosPares.push(vector[index][indexInterno]);
      }
    }
  }
  return numerosPares
}

console.log(arrayofNumbers([[1, 2], [3,4,5,6], [7,8,9,10]]))

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];
function vezesAparece(basket) {
  let cesta = {}
  for(let index = 0; index < basket.length; index += 1) {
    cesta[basket[index]] = 0;
    for(let indexInterno = 0; indexInterno < basket.length; indexInterno += 1) {
      if(basket[index] === basket[indexInterno]) {
        cesta[basket[index]] += 1;
      }
    }
  }
  return cesta
}
let cesta = vezesAparece(basket);
console.log("Sua cesta possui:", cesta.Melancia, "Melancias,", cesta.Abacate, "Abacates,", cesta.Uva, "Uvas,", cesta.Laranja, "Laranjas,", cesta.Jaca, "Jacas,", cesta.Pera, "Peras e", cesta.Banana, "Bananas.")

let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

console.log("O morador do bloco 2 de nome", moradores.blocoDois[1].nome, moradores.blocoDois[1].sobrenome, "mora no", moradores.blocoDois[1].andar + "° andar, apartamento", moradores.blocoDois[1].apartamento)

for(let index = 0; index < moradores.blocoUm.length; index += 1) {
  console.log(moradores.blocoUm[index].nome, moradores.blocoUm[index].sobrenome)
}

for(let index = 0; index < moradores.blocoDois.length; index += 1) {
  console.log(moradores.blocoDois[index].nome, moradores.blocoDois[index].sobrenome)
}