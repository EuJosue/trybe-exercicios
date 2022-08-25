
document.getElementById('header-container').style.backgroundColor = '#00b068';

document.querySelector('section').style.backgroundColor = '#fea184';
let h3Emergency = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < h3Emergency.length; index += 1) {
  h3Emergency[index].style.backgroundColor = '#a501f5';
}
document.querySelector('.no-emergency-tasks').style.backgroundColor = '#f9dd5f';
let h3NoEmergency = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < h3NoEmergency.length; index += 1) {
  h3NoEmergency[index].style.backgroundColor = '#232425';
}

document.getElementById('footer-container').style.backgroundColor = '#003532';