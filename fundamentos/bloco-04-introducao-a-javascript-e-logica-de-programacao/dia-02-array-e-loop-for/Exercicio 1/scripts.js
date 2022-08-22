let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let index = 0; index < numbers.length; index += 1) {
  console.log("Posição:", index, "valor:", numbers[index]);
}

let sum = 0;
for(let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}
console.log("A soma total é:", sum);

let media = sum / numbers.length;
console.log("A média aritmética é:", media)

if(media > 20){
  console.log("Valor maior que 20.")
} else {
  console.log("Valor menor ou igual a 20.")
}

let maiorValor = 0;
for(let index = 0; index < numbers.length; index += 1) {
  if(maiorValor < numbers[index]) {
    maiorValor = numbers[index]
  }
}
console.log("O maior valor é:", maiorValor)

let impar = 0;
for(let index = 0; index < numbers.length; index += 1) {
  if(numbers[index] % 2 !== 0) {
    impar += 1;
  }
}
if(impar > 0) {
  console.log("Há", impar, "valores ímpares.")
} else {
  console.log("Nenhum valor ímpar encontrado.")
}

let menorValor = 0;
for(let index = 0; index < numbers.length; index += 1) {
  if(menorValor > numbers[index]) {
    menorValor = numbers[index]
  }
}
console.log("O menor valor é:", menorValor)

for(let index = 1; index <= 25; index += 1) {
  console.log(index)
  console.log("Valor dividido por 2:", index / 2)
}
