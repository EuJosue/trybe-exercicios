document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = 'red';
document.querySelector('#elementoOndeVoceEsta').childNodes[1].innerText = 'teste';
document.querySelector('#pai').childNodes[1]; // primeiroFilho
document.querySelector('#elementoOndeVoceEsta').parentNode.childNodes[1]; // primeiroFilho
document.querySelector('#elementoOndeVoceEsta').parentNode.childNodes[4]; // 'Atenção!'
document.querySelector('#elementoOndeVoceEsta').parentNode.childNodes[5]; // terceiroFilho
document.querySelector('#pai').childNodes[5]; // terceiroFilho

function createSectionElement(id, parent) {
  let elementCreated = document.createElement('section');
  elementCreated.id = id;
  parent.appendChild(elementCreated);
}

createSectionElement('brotherMeu', document.querySelector("#elementoOndeVoceEsta").parentNode);

createSectionElement('filhoDeEu', document.querySelector("#elementoOndeVoceEsta"));

createSectionElement('netoMeu', document.querySelector("#elementoOndeVoceEsta").childNodes[1]);

document.querySelector('#netoMeu').parentNode.parentNode.parentNode.childNodes[5];

function removeElement(elementPai, safeElement) {
  let position = 0;
  let quantity = elementPai.childNodes.length
  for (let index = 0; index < quantity; index += 1) {
    let removeElement = elementPai.childNodes[position];
    if (removeElement.id === document.querySelector(safeElement).id) {
      position += 1;
    } else {
      elementPai.removeChild(removeElement)
    }
  }
}

let elementPai = document.querySelector('#pai');
removeElement(elementPai, '#elementoOndeVoceEsta');

let elementEu = document.querySelector('#elementoOndeVoceEsta');
removeElement(elementEu, '#primeiroFilhoDoFilho');

function removeAllElement(elementPai) {
  let quantity = elementPai.childNodes.length;
  for (let index = 0; index < quantity; index += 1) {
    let removeElement = elementPai.childNodes[0];
    elementPai.removeChild(removeElement);
  }
}

let elementNeto = document.querySelector('#primeiroFilhoDoFilho');
removeAllElement(elementNeto);
