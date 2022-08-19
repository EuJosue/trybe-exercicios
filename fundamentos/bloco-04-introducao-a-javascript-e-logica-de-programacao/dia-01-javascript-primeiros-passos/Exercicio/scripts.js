function soma(a, b) {
  const soma = a + b;
  return console.log(soma);
}
soma(5, 3)

function subtracao(a, b) {
  const subtracao = a - b;
  return console.log(subtracao);
}

subtracao(5, 3)

function multiplicacao(a, b) {
  const multiplicacao = a * b;
  return console.log(multiplicacao);
}

multiplicacao(5, 3)

function divisao(a, b) {
  const divisao = a / b;
  return console.log(divisao);
}

divisao(5, 3)

function modulo(a, b) {
  const modulo = a % b;
  return console.log(modulo);
}

modulo(5, 3)

function maiorDeDoisNumeros(primeiroNumero, segundoNumero) {
  let maior
  if (primeiroNumero > segundoNumero) {
    maior = primeiroNumero;
  } else {
    maior = segundoNumero;
  }
  return console.log(maior);
}

maiorDeDoisNumeros(1865, 1567)

function maiorDeTresNumeros(primeiroNumero, segundoNumero, terceiroNumero) {
  let maior
  if (primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero) {
    maior = primeiroNumero;
  } else if (segundoNumero > primeiroNumero && segundoNumero > terceiroNumero) {
    maior = segundoNumero;
  } else if (terceiroNumero > primeiroNumero && terceiroNumero > primeiroNumero) {
    maior = terceiroNumero;
  } else {
    maior = "ERROR!"
  }
  return console.log(maior)
}

maiorDeTresNumeros(4, 5, 3)

function positivoNegativoZero(n) {
  let resposta;
  if (n > 0) {
    resposta = "positive";
  } else if (n < 0) {
    resposta = "negative";
  } else if (n === 0) {
    resposta = "zero";
  } else {
    resposta = "error";
  }
  return console.log(resposta)
}

positivoNegativoZero(15)

function angulosTriangulo(angulo1, angulo2, angulo3) {
  let resposta
  if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
    resposta = "ERROR! Ângulo inválido!";
  } else if (angulo1 + angulo2 + angulo3 === 180) {
    resposta = true;
  } else if (angulo1 + angulo2 + angulo3 !== 180) {
    resposta = false;
  } else {
    resposta = "ERROR!"
  }
  return console.log(resposta)
}

angulosTriangulo(0, 0, 180)

function movimentoPecaXadrez(peca) {
  let resposta

  switch (peca.toLowerCase()) {
    case "peão":
      resposta = "No primeiro movimento ele pode andar tanto 1 (uma) quanto 2 (duas) casas, após o primeiro movimento apenas 1 (uma) casa e apenas para frente, com exceção quando for para comer (matar) outra peça, ai é apenas na diagonal frontal."
      break
    case "torre":
      resposta = "Em linhas retas."
      break
    case "cavalo":
      resposta = "Em 'L', ou seja você conta 2 (duas) casas para uma direção e uma para a direita ou esquerda, e é nessa última casa que ele pode se locomover, assim podendo no máximo ter 8 opções de casas para ir."
      break
    case "bispo":
      resposta = "Nas diagonais"
      break
    case "rainha":
      resposta = "Em linhas retas e nas diagonais"
      break
    case "rei":
      resposta = "1 casa para cada lado"
      break
    default:
      resposta = "ERROR! peça inválida."
  }

  return console.log(resposta)
}

movimentoPecaXadrez("PeÃo")

/* Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */

function gradePercentToLetter(grade) {
  let resultado;

  if (grade > 100 || grade < 0) {
    resultado = "ERROR! Nota inválida!";
  } else if (grade >= 90) {
    resultado = "A";
  } else if (grade >= 80) {
    resultado = "B";
  } else if (grade >= 70) {
    resultado = "C";
  } else if (grade >= 60) {
    resultado = "D";
  } else if (grade >= 50) {
    resultado = "E";
  } else if (grade < 50) {
    resultado = "F";
  } else {
    resultado = "ERROR!";
  }

  return console.log(resultado);
}

gradePercentToLetter(151)

  function peloMenosUmEPar (n1, n2, n3) {
    let resultado

    if (n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0) {
      resultado = true;
    } else {
      resultado = false;
    }

    return console.log(resultado)
  }

  peloMenosUmEPar(7,7,7)

  function peloMenosUmEImpar (n1, n2, n3) {
    let resultado

    if (n1 % 2 !== 0 || n2 % 2 !== 0 || n3 % 2 !== 0) {
      resultado = true;
    } else {
      resultado = false;
    }

    return console.log(resultado)
  }

  peloMenosUmEImpar(8, 8, 8)

function calculoLucro (custo, valorVenda, quantidade) {
  let lucroLiquido = (valorVenda / 100 * 80) - custo;
  let lucroTotal = lucroLiquido * quantidade;

  return console.log("Lucro por unidade = R$" + lucroLiquido + " e lucro total = R$" + lucroTotal + ".")
}

  calculoLucro(10, 20, 1000)

  function salarioBrasil (salario) {
    let inss1 = salario / 100 * 8;
    let inss2 = salario / 100 * 9;
    let inss3 = salario / 100 * 11;
    let inss4 = 570.88;
    let salarioBase
    let ir

    if (salario <= 1556.94 && salario > 0) {
      salarioBase = salario - inss1;
    } else if (salario >= 1556.95 && salario <= 2594.92) {
      salarioBase = salario - inss2;
    } else if (salario >= 2594.93 && salario <= 5189.82) {
      salarioBase = salario - inss3;
    } else if (salario >= 5189.83) {
      salarioBase = salario - inss4;
    }

    if (salario <= 1903.98 && salario > 0) {
      ir = 0;
    } else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
      ir = (salarioBase / 100 * 7.5) - 142.80;
    } else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
      ir = (salarioBase / 100 * 15) - 354.80;
    } else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
      ir = (salarioBase / 100 * 22.5) - 636.13;
    } else if (salarioBase >= 4664.69) {
      ir = (salarioBase / 100 * 27.5) - 869.36;
    }

    return console.log(salarioBase - ir)
  }

    salarioBrasil(6000)