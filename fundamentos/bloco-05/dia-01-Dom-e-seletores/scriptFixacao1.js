const firstParagraph = document.getElementById("first-paragraph");
firstParagraph.style.color = "red";
document.getElementById("page-title").innerText = 'Shrek 2';
document.getElementById("second-paragraph").innerText = 'Usando minha criatividade para alterar o segundo parágrafo.';
document.getElementById('second-paragraph').style.color = 'purple';
document.getElementById('second-paragraph').innerText = document.getElementById('second-paragraph').innerText.toUpperCase();
document.getElementById('second-paragraph').style.fontWeight = '200';
document.getElementById('subtitle').innerText = 'Olha a minha criatividade';
document.getElementById('subtitle').style.fontWeight = '800';
document.getElementById('subtitle').style.fontSize = 'larger';

document.getElementsByClassName('paragraph')[0].style.fontSize = 'small';
document.getElementsByTagName('h4')[0].style.color = 'green';