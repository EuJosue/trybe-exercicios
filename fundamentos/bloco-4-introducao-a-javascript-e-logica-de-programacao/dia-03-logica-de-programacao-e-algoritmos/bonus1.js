
let n = 7;
let quadrado = "";
for(let index = 0; index < n; index += 1) {
  for(let indexLinha = 0; indexLinha < n; indexLinha += 1) {
    quadrado += "*"
  }
  console.log(quadrado)
  quadrado = "";
}
console.log("----------------")
let triangulo = "";
for(let index = 1; index <= n; index += 1) {
  for(let indexLinha = 0; indexLinha < index; indexLinha += 1) {
    triangulo += "*";
  }
  console.log(triangulo)
  triangulo = "";
}
console.log("----------------")
let trianguloEspelhado = "";
for(let index = 0; index < n; index += 1) {
  for(let indexLinha = 1; indexLinha <= n; indexLinha += 1) {
    if(n - (indexLinha + index) !== 0 && n - (indexLinha + index) > 0) {
      trianguloEspelhado += " ";
    } else {
      trianguloEspelhado += "*";
    }
  }
  console.log(trianguloEspelhado)
  trianguloEspelhado = "";
}
console.log("----------------")
let piramide = "";
let andar = 0;
let meio = Math.floor(n / 2);
for(let index = 0; index < n; index += 2) {
  for(let indexLinha = 0; indexLinha < n; indexLinha += 1) {
    if (indexLinha >= meio - andar && indexLinha <= meio + andar) {
      piramide += "*";
    } else {
      piramide += " ";
    }
  }
  andar += 1;
  console.log(piramide);
  piramide = "";
}
console.log("----------------")
let piramideVazia = "";
let andarVazio = 0;
for(let index = 0; index < n; index += 2) {
  for(let indexLinha = 0; indexLinha < n; indexLinha += 1) {
    if (indexLinha === meio - andarVazio || indexLinha === meio + andarVazio) {
      piramideVazia += "*";
    } else if (meio - andarVazio === 0) {
      piramideVazia += "*"
    } else {
      piramideVazia += " ";
    }
  }
  andarVazio += 1;
  console.log(piramideVazia)
  piramideVazia = "";
}
console.log("----------------")
let maiorNumeroPrimo = 0;
let numeroDefinido = 997;
for(let index = 2; index <= numeroDefinido; index += 1) {
  if(index % 2 !== 0) {
    if(index % 3 !== 0) {
      if(index % 5 !== 0) {
        if(index > maiorNumeroPrimo) {
          maiorNumeroPrimo = index
        }
      }
    }
  }
}
if (numeroDefinido === maiorNumeroPrimo) {
  console.log(numeroDefinido, "é um número primo!")
} else {
  console.log(numeroDefinido, "não é um número primo!")
}