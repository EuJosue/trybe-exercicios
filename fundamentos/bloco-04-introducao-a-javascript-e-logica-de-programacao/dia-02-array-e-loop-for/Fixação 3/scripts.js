
let d1 = 3;
let d2 = 0;
let count = 0;
while (d1 !== d2) {
  count += 1;
function dice () { 
  return Math.ceil(Math.random() * 6);
}
d1 = dice();
d2 = dice();
}
console.log("Demorou", count, "vezes para cair o mesmo número em ambos os dados.", d1, d2)