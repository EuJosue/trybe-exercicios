// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function preventDefault(event) {
  event.preventDefault();
}
HREF_LINK.addEventListener('click', preventDefault);
INPUT_CHECKBOX.addEventListener('click', preventDefault);

function textPreventDefault(event) {
  event.preventDefault();
  if (event.key === 'a') {
    INPUT_TEXT.value += 'a';
  }
}
INPUT_TEXT.addEventListener('keypress', textPreventDefault);
