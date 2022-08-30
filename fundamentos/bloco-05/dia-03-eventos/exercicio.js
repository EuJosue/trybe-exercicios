function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const day = document.getElementsByClassName('day')
const input = document.getElementById('task-input');
const buttonAdd = document.getElementById('btn-add')

let numbers = [];
let activeHoliday = true;
let activeFriday = true;
let clickTaskColor = true;

createButton('Feriados', 'btn-holiday', changeBackgroundColorHoliday);
createButton('Sexta-feira', 'btn-friday', changeTextFriday)
addNewTask('teste')
createNewTaskColor('red')
buttonAdd.addEventListener('click', addCompromise)
input.addEventListener('keydown', pressedEnterInput)

for (let index = 0; index < decemberDaysList.length; index += 1) {
  const monthDays = document.createElement('li');
  monthDays.style.color = 'rgb(119, 119, 119)'
  monthDays.addEventListener('mouseover', zoomInEnter)
  monthDays.addEventListener('mouseleave', zoomOutLeave)
  monthDays.addEventListener('click', changeDayColorClick)
  if (decemberDaysList[index] === 24 || decemberDaysList[index] === 31) {
    monthDays.className = 'day holiday';
  } else if (decemberDaysList[index] === 25) {
    monthDays.className = 'day holiday friday';
  } else if (decemberDaysList[index] === 4 || decemberDaysList[index] === 11 || decemberDaysList[index] === 18) {
    monthDays.className = 'day friday';
  } else {
    monthDays.className = 'day';
  }
  monthDays.innerText = decemberDaysList[index];
  document.getElementById('days').appendChild(monthDays);
}

function createButton(buttonText, id, funcao) {
  const button = document.createElement('button');
  button.id = id;
  button.innerText = buttonText;
  button.addEventListener('click', funcao)
  document.querySelector('.buttons-container').appendChild(button);
}

function changeBackgroundColorHoliday() {
  const holidays = document.getElementsByClassName('holiday')
  if (activeHoliday) {
    for (let index = 0; index < holidays.length; index += 1) {
      holidays[index].style.backgroundColor = '#F0706A';
    }
  } else {
    for (let index = 0; index < holidays.length; index += 1) {
      holidays[index].style.backgroundColor = 'rgb(238,238,238)'
    }
  }
  activeHoliday = !activeHoliday
}

function changeTextFriday() {
  const fridays = document.getElementsByClassName('friday')
  if (activeFriday) {
    for (let index = 0; index < fridays.length; index += 1) {
      numbers.push(fridays[index].innerText)
      fridays[index].innerText = 'SEXTOU!'
      fridays[index].style.color = 'red'
    }
  } else {
    for (let index = 0; index < fridays.length; index += 1) {
      fridays[index].innerText = numbers[0];
      fridays[index].style.color = '#777'
      numbers.shift();
    }
  }
  activeFriday = !activeFriday
}

function zoomInEnter(event) {
  event.target.style.fontSize = '30px'
}

function zoomOutLeave(event) {
  event.target.style.fontSize = '20px'
}

function addNewTask(task) {
  const span = document.createElement('span');
  span.innerText = task;
  document.getElementsByClassName('my-tasks')[0].appendChild(span);
}

function createNewTaskColor (color) {
  const div = document.createElement('div');
  div.style.backgroundColor = color;
  div.addEventListener('click', clickTaskColorSelect)
  document.getElementsByClassName('my-tasks')[0].appendChild(div);
}

function clickTaskColorSelect(event) {
  if(clickTaskColor) {
    event.target.classList.add('task', 'selected')
  } else {
    event.target.classList.remove('selected')
  }
  clickTaskColor = !clickTaskColor
}

function changeDayColorClick(event) {
  if(event.target.style.color === 'rgb(119, 119, 119)') {
    event.target.style.color = document.getElementsByClassName('selected')[0].style.backgroundColor;
  } else {
    event.target.style.color = 'rgb(119, 119, 119)';
  }
}

function addCompromise(event) {
  const p = document.createElement('p');
  console.log(input.value)
  if (input.value == '') {
    alert('Erro ao adicionar! Verifique se o campo não está vazio.')
    console.log('teste')
  }
  p.innerText = input.value;
  p.style.paddingTop = '5px'
  p.style.fontSize = '18px'
  p.style.color = '#666'
  p.style.fontWeight = 500;
  document.getElementsByClassName('input-container')[0].appendChild(p)
}

function pressedEnterInput(event) {
  if (event.key == 'Enter') {
    addCompromise()
  }
}
