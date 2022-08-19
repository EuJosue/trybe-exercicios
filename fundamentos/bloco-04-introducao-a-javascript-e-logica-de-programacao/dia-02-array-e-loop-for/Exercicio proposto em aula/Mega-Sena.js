  let acertos = 0;
  let numerosMegaSena = [];
  function sortearNumerosMegaSena () {
    numerosMegaSena = [];
  numerosMegaSena.push(Math.floor(Math.random() * 60 + 1));
    
  for (let index = 0; index < 5; index += 1) {
    let numero = Math.floor(Math.random() * 60 + 1);
    let permissao = true;

    for (let indexCheck = 0; indexCheck < numerosMegaSena.length; indexCheck += 1) {
      if(numero === numerosMegaSena[indexCheck]) {
        permissao = false;
        index -= 1;
      } 
    }
    
    if (permissao === true) {
      numerosMegaSena.push(Math.floor(Math.random() * 60 + 1));
    }
  }
  return numerosMegaSena
}
console.log(numerosMegaSena)

function descobrirGanheiMegaSena (minhaAposta) {
  for(let index = 0; index < minhaAposta.length; index += 1) {
    for(let indexMega = 0; indexMega < numerosMegaSena.length; indexMega += 1) {
      if(minhaAposta[index] === NumerosMegaSena[indexMega]) {
        acertos += 1;
      }
    }
  }

  return acertos
}

console.log("Eu acertei " + descobrirGanheiMegaSena([1, 2, 3, 4, 5, 6]) + " números.")
