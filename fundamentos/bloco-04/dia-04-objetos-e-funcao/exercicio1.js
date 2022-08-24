let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
// console.log("Bem-vinda, " + info.personagem)

info["recorrente"] = "Sim";
// console.log(info)

// for (let infos in info) {
//   console.log(infos);
// }

// for (let infos in info) {
//   console.log(info[infos]);
// }

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O ultimo MacPatinhas",
  recorrente: "Sim"
};

// console.log(info2)

console.log(info.personagem + " e " + info2.personagem)
console.log(info.origem + " e " + info2.origem)
console.log(info.nota + " e " + info2.nota)
if (info.recorrente === "Sim" && info2.recorrente === "Sim") {
  console.log("Ambos recorrentes")
} else if (info.recorrente === "Sim" || info2.recorrente === "Sim") {
  console.log("Apenas um dos 2 é recorrente")
} else {
  console.log("Nenhum dos dois é recorrente")
}


let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama '" + leitor.livrosFavoritos[0].titulo + "'")

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
})
console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos.")