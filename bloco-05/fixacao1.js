document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = 'red';
document.querySelector('#elementoOndeVoceEsta').childNodes[1].innerText = 'teste';
document.querySelector('#pai').childNodes[1]; // primeiroFilho
document.querySelector('#elementoOndeVoceEsta').parentNode.childNodes[1]; // primeiroFilho
document.querySelector('#elementoOndeVoceEsta').parentNode.childNodes[4]; // 'Atenção!'
document.querySelector('#elementoOndeVoceEsta').parentNode.childNodes[5]; // terceiroFilho
document.querySelector('#pai').childNodes[5]; // terceiroFilho
