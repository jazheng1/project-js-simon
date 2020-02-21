// This file contains the game logic.
// All the event-listening should happen in buttons.js

// let require
// let userPattern = require('./buttons.js');
let pattern = [];
let htmlButtonNames = ['green','red', 'yellow', 'blue'];
let red = document.querySelector('.red');
let blue = document.querySelector('.blue');
let green = document.querySelector('.green');
let yellow  = document.querySelector('.yellow');
let counter = 2;

function changeRed() {
  red.style.backgroundColor = 'red';
}

function changeBlue() {
  blue.style.backgroundColor = 'blue';
}

function changeGreen() {
  green.style.backgroundColor = 'green';
}

function changeYellow() {
  yellow.style.backgroundColor = 'yellow';
}

function clearColor() {
  blue.style.color="#2185D0";
  red.style.color="#DB2828";
  yellow.style.color="#FBBD08";
  green.style.color="#21BA45";
}

function randomPattern() {
  for (let i = 0 ; i < counter; i++) {
    let number = Math.floor(Math.random() * 4);
    pattern.push(htmlButtonNames[number]);
  }
  return pattern;
}

function changeColors(array) {
  console.log(array);
  for (let j = 0; j < array.length; j++) {
    if (array[j] === 'blue') {
      let time = setTimeout(changeBlue(), 800);
      // clearTimeout(time);
      // clearColor();
      console.log('hi')
    }
    if (array[j] === 'red') {
      let time = setTimeout(changeRed(), 800);
      // clearTimeout(time);
      // clearColor();
      console.log('hi')
    }
    if (array[j] === 'yellow') {
      let time = setTimeout(changeYellow(), 800);
      // clearTimeout(time);
      // clearColor();
      console.log('hi')
    }
    if (array[j] === 'green') {
      let time = setTimeout(changeGreen(), 800);
      // clearTimeout(time);
      // clearColor();
      console.log('hi')
    }
    setTimeout(300000);
    clearColor();
  };
}


changeColors(randomPattern());
