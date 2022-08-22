
let mult = 10;

for(let index = 9; index > 0; index -= 1) {
  mult = mult * index;
}

console.log(mult)

let word = "tryber";
let drow = "";

for(let index = word.length - 1; index >= 0; index -= 1) {
  drow += word[index];
}

console.log(drow)

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = ""
let menorPalavra = "dsadasdasdsadasdsadsadsadsa"

for(let index = 0; index < array.length; index += 1) {
  if (maiorPalavra.length < array[index].length) {
    maiorPalavra = array[index]
  }
  if (menorPalavra.length > array[index].length) {
    menorPalavra = array[index]
  }
}

console.log(maiorPalavra)
console.log(menorPalavra)
let maiorNumeroPrimo = 0;
for(let index = 2; index <= 15648556; index += 1) {
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

console.log(maiorNumeroPrimo)
