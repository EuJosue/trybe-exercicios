  const nota = 100;

  if (nota < 0 || nota > 100)  {
    console.log("ERROR!")
  }
  else if (nota >= 80) {
    console.log("Parabéns, você foi aprovada(o)!")
  }
  else if (nota >= 60) {
    console.log("Você está na nossa lista de espera.")
  }
  else if (nota >= 0) {
    console.log("Você foi reprovada(o)")
  }