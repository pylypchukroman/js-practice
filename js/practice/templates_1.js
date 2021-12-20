'use strict';

console.log("OK_1");


const redButton = document.querySelector('.red');
const blueButton = document.querySelector('.blue');
const greenButton = document.querySelector('.green');

const colors = function (color) {
    document.body.style.backgroundColor = (color);
}

redButton.addEventListener('click', () => {
    colors('red')
});
blueButton.addEventListener('click', () => {
    colors('blue')
});
greenButton.addEventListener('click', () => {
    colors('green')
});
