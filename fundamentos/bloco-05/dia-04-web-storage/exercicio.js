const inputBackgroundColor = document.getElementById('inputBackgroundColor');
const inputTextColor = document.getElementById('inputTextColor');
const inputFontSize = document.getElementById('inputFontSize');
const inputLineHeight = document.getElementById('inputLineHeight');
const inputFontFamily = document.getElementById('inputFontFamily');
const inputUserText = document.getElementById('inputUserText');
const labels = document.getElementsByTagName('label');

inputBackgroundColor.addEventListener('change', changeBackgroundColor);
inputTextColor.addEventListener('change', changeTextColor);
inputTextColor.addEventListener('change', changeLabelTextColor);
inputFontSize.addEventListener('keyup', changeFontSize);
inputFontSize.addEventListener('change', changeFontSize);
inputLineHeight.addEventListener('keyup', changeLineHeight);
inputLineHeight.addEventListener('change', changeLineHeight);
inputFontFamily.addEventListener('keyup', changeFontFamily);
inputFontFamily.addEventListener('change', changeFontFamily);
inputUserText.addEventListener('keyup', changeInnerTextMain)

window.onload = document.body.style.backgroundColor = localStorage.getItem('backgroundColor');
window.onload = inputBackgroundColor.style.backgroundColor = localStorage.getItem('backgroundColor');
window.onload = inputTextColor.style.backgroundColor = localStorage.getItem('backgroundColor');
window.onload = document.body.children[1].style.color = localStorage.getItem('textColor');
window.onload = changeLabelTextColor(localStorage.getItem('textColor'));
window.onload = document.body.children[1].style.fontSize = localStorage.getItem('fontSize');
window.onload = document.body.children[1].style.lineHeight = localStorage.getItem('lineHeight');
window.onload = document.body.children[1].style.fontFamily = localStorage.getItem('fontFamily');
window.onload = document.getElementsByTagName('p')[0].innerHTML = localStorage.getItem('innerText');

function changeBackgroundColor() {
  document.body.style.backgroundColor = inputBackgroundColor.value;
  inputBackgroundColor.style.backgroundColor = inputBackgroundColor.value
  inputTextColor.style.backgroundColor = inputBackgroundColor.value
  localStorage.setItem('backgroundColor', inputBackgroundColor.value);
}

function changeTextColor() {
  document.body.children[1].style.color = inputTextColor.value;
  localStorage.setItem('textColor', inputTextColor.value);
  changeLabelTextColor(inputTextColor.value)
}

function changeLabelTextColor(color) {
  for (let index = 0; index < labels.length; index += 1) {
    labels[index].style.color = color;
  }
}

function changeFontSize() {
  document.body.children[1].style.fontSize = inputFontSize.value + 'px';
  localStorage.setItem('fontSize', inputFontSize.value + 'px');
}

function changeLineHeight() {
  document.body.children[1].style.lineHeight = inputLineHeight.value + 'px';
  localStorage.setItem('lineHeight', inputLineHeight.value + 'px');
}

function changeFontFamily() {
  document.body.children[1].style.fontFamily = inputFontFamily.value;
  localStorage.setItem('fontFamily', inputFontFamily.value);
}

function changeInnerTextMain() {
  document.getElementsByTagName('p')[0].innerHTML = inputUserText.value;
  localStorage.setItem('innerText', inputUserText.value);
}