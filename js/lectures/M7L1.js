'use strict';

console.log("OK");

// const handler1 = e => {
//     e.stopImmediatePropagation();
//     //e.stopPropagation();
//     console.log(e.currentTarget, e.target);
// }
// const handler2 = e => {
//     console.log(e.currentTarget, e.target);
// }


// document.querySelector('#div-3').addEventListener('click', handler1);
// document.querySelector('#div-3').addEventListener('click', handler2);


// document.querySelector('#div-2').addEventListener('click', handler1);
// document.querySelector('#div-1').addEventListener('click', handler1);

/*-----------------*/

// document.querySelector('#root').addEventListener('click', e => {
//     if (e.target.closest('button').tagName !== 'BUTTON' || !e.target.dataset.color) return false;

//     document.body.style.backgroundColor = e.target.dataset.color;
// });

const refs = {
    panel: document.querySelector('#panel'),
    num: document.querySelector('#num'),
    calc: document.querySelector('#calc'),
    input: document.querySelector('#calc input'),
}

refs.calc.addEventListener('click', e => {
    if (!e.target.closest('button')) return false;
    const value = e.target.textContent;

    if (value === '=') refs.input.value = eval(refs.input.value);
    else if (value === 'clear') refs.input.value = '';
    else refs.input.value += value;
})