
function adicao(num1, num2) {
  let resultado = num1 + num2;
  return resultado 
}

console.log(adicao(5, 7))

function subtracao(num1, num2) {
  let resultado = num1 - num2;
  return resultado
}

console.log(subtracao(7, 5))

function multiplicacao(num1, num2) {
  let resultado = num1 * num2
  return resultado
}

console.log(multiplicacao(3, 8))

function divisao(num1, num2) {
  let resultado = num1 / num2
  return resultado
}

console.log(divisao(18, 2))

function modulo(num1, num2) {
  let resultado = num1 % num2
  return resultado
}

console.log(modulo(19, 3))

function maiorDeDoisNumeros(num1, num2) {
  if(num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(maiorDeDoisNumeros(45, 54))

function maiorDeTresNumeros(num1, num2, num3) {
  if(num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}

console.log(maiorDeTresNumeros(45, 54, 99))

function positiveNegativeOrZero(num) {
  if(num > 0) {
    return "positive";
  } else if (num < 0) {
    return "negative";
  } else {
    return "zero"
  }
}

console.log(positiveNegativeOrZero(-1))

function ehTriangulo(ang1, ang2, ang3) {
  let somaAng = ang1 + ang2 + ang3;
  if(ang1 < 0 || ang2 < 0 || ang3 < 0) {
    return "Erro! angulo inválido!"
  } else if (somaAng === 180) {
    return true
  } else {
    return false
  }
}

console.log(ehTriangulo(45, 45, 90))