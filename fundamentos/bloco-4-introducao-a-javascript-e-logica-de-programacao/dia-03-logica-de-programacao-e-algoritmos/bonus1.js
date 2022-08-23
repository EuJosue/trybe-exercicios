
let n = 7;

for(let index = 0; index < n; index += 1) {
  let quadrado = "";
  for(let indexLinha = 0; indexLinha < n; indexLinha += 1) {
    quadrado += "*"
  }
  console.log(quadrado)
}
console.log("----------------")

for(let index = 1; index <= n; index += 1) {
  let triangulo = "";
  for(let indexLinha = 0; indexLinha < index; indexLinha += 1) {
    triangulo += "*";
  }
  console.log(triangulo)
}
console.log("----------------")
for(let index = 0; index < n; index += 1) {
  let trianguloEspelhado = "";
  for(let indexLinha = 1; indexLinha <= n; indexLinha += 1) {
    if(n - (indexLinha + index) !== 0 && n - (indexLinha + index) > 0) {
      trianguloEspelhado += " ";
    } else {
      trianguloEspelhado += "*";
    }
  }
  console.log(trianguloEspelhado)
}
console.log("----------------")
let andar = 0;
let meio = Math.floor(n / 2);
for(let index = 0; index < n; index += 2) {
  let piramide = "";
  for(let indexLinha = 0; indexLinha < n; indexLinha += 1) {
    if (indexLinha >= meio - andar && indexLinha <= meio + andar) {
      piramide += "*";
    } else {
      piramide += " ";
    }
  }
  andar += 1;
  console.log(piramide);
}
console.log("----------------")
let andarVazio = 0;
for(let index = 0; index < n; index += 2) {
  let piramideVazia = "";
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