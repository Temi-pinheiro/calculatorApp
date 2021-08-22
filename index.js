const body = document.querySelector('body');
const screen = document.querySelector('.screen');
const numbers = document.querySelectorAll('.numbers');
const resetBtn = document.querySelector('#reset');
let newNum = 0;
let currNum = 0;
let lastClicked = '';
const dvd = document.querySelector('#divide');
const mlt = document.querySelector('#multiply');
const sub = document.querySelector('#subtract');
const add = document.querySelector('#add');
const equals = document.querySelector('#equals');
const theme1 = document.getElementById('1st');
const theme2 = document.getElementById('2nd');
const theme3 = document.getElementById('3rd');
const dlt = document.getElementById('delete');

numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    screen.value += number.innerHTML;
    newNum = Number(screen.value);
  });
});

resetBtn.addEventListener('click', (e) => {
  screen.value = '';
  currNum = 0;
  lastClicked = '';
});

function addNums() {
  currNum += Number(newNum);
  screen.value = '';
  lastClicked = 'add';
  newNum = 0;
}
function mltNums() {
  if (currNum == 0) {
    currNum += 1;
  }
  currNum *= Number(newNum);
  screen.value = '';
  lastClicked = 'mlt';
  newNum = 0;
}
function dvdNums() {
  currNum /= Number(newNum);
  screen.value = '';
  lastClicked = 'dvd';
}
function subNums() {
  currNum -= Number(newNum);
  screen.value = '';
  lastClicked = 'sub';
  newNum = 0;
}

function showEquals() {
  switch (lastClicked) {
    case 'add':
      currNum += newNum;
      lastClicked = '';
      newNum = 0;
      break;
    case 'mlt':
      currNum *= newNum;
      lastClicked = '';
      newNum = 1;
      break;
    case 'dvd':
      currNum /= newNum;
      lastClicked = '';
      newNum = 0;
      break;
    case 'sub':
      currNum -= newNum;
      lastClicked = '';
      newNum = 0;
      break;

    default:
      currNum = 0;
      lastClicked = '';
  }
  screen.value = currNum;
}

add.addEventListener('click', addNums);
sub.addEventListener('click', subNums);
mlt.addEventListener('click', mltNums);
dvd.addEventListener('click', dvdNums);
equals.addEventListener('click', showEquals);
theme1.addEventListener('click', (e) => {
  body.className = 't1';
});
theme2.addEventListener('click', (e) => {
  body.className = 't2';
});
theme3.addEventListener('click', (e) => {
  body.className = 't3';
});

dlt.addEventListener('click', (e) => {
  screen.value = screen.value.substring(0, screen.value.length - 1);
});
