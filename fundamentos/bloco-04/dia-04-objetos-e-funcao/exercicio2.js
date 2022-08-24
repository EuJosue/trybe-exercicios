function ehPalindromo(word){
  let palindromo = 0;
  let naoPalindromo = 0;
  for(let index = 0; index < word.length; index += 1) {
    if (word[index] === word[word.length - index - 1]) {
      palindromo += 1;
    } else {
      naoPalindromo += 1;
    }
  }
  if (naoPalindromo > 0) {
    return false
  } else {
    return true
  }
}

console.log(ehPalindromo("amor a roma"))

function indiceMaiorValor(arrayInteiros) {
  let maiorValor = 0;
  let posicaoMaiorValor = 0;
  for(let index = 0; index < arrayInteiros.length; index += 1) {
    if(maiorValor < arrayInteiros[index]) {
      maiorValor = arrayInteiros[index]
      posicaoMaiorValor = index
    }
  }
  return posicaoMaiorValor;
}

console.log(indiceMaiorValor([2, 3, 6, 7, 10, 1, 17]))

function indiceMenorValor(arrayInteiros) {
  let menorValor = 0;
  let indiceMenorValor = 0;
  for(let index = 0; index < arrayInteiros.length; index += 1) {
    menorValor += arrayInteiros[index];
  }
  for(let index = 0; index < arrayInteiros.length; index += 1) {
    if(menorValor > arrayInteiros[index]) {
      menorValor = arrayInteiros[index];
      indiceMenorValor = index
    }
  }
  return indiceMenorValor
}

console.log(indiceMenorValor([2, 4, 6, 7, 10, 0, -3, 13, 18, -57, 15, 1547]))

function maiorNome(arrayNomes) {
  let maiorNome = "";
  for(let index = 0; index < arrayNomes.length; index += 1) {
    if(arrayNomes[index].length > maiorNome.length) {
      maiorNome = arrayNomes[index]
    }
  }
  return maiorNome
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana', 'Esquilo voador']))

function maisRepete(arrayInteiros) {
  let quantidadeRepete = [];
  let posicaoMaisRepete = 0;
  let maiorValor = 0;
  for(let index = 0; index < arrayInteiros.length; index += 1) {
    quantidadeRepete[index] = 0;
    for(let i = 0; i < arrayInteiros.length; i += 1) {
      if(arrayInteiros[index] === arrayInteiros[i]) {
        quantidadeRepete[index] += 1
      }
    }
  }
  for(let index = 0; index < quantidadeRepete.length; index += 1) {
    if(maiorValor < quantidadeRepete[index]) {
      maiorValor = quantidadeRepete[index]
      posicaoMaisRepete = index
    }
  }
  return arrayInteiros[posicaoMaisRepete]
}

console.log(maisRepete([2, 3, 2, 5, 8, 2, 3, 3, 3]))

function somatorioAteN(n) {
  let somaTotal = 0;
  for(let index = 1; index <= n; index += 1) {
    somaTotal += index
  }
  return somaTotal;
}

console.log(somatorioAteN(50))

function verificaFimPalavra(word, ending) {
  let check = false;
  for(let index = 0; index < ending.length; index += 1) {
    if (ending[ending.length - 1 - index] === word[word.length - 1 - index]) {
      check = true;
    } else {
      check = false;
    }
  }
  return check
}

console.log(verificaFimPalavra("trybe", "be"))