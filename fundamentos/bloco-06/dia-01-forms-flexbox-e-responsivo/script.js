const submitButton = document.getElementById('submit-button');

function submitPreventDefault(event) {
  event.preventDefault();
}
submitButton.addEventListener('click', submitPreventDefault);
