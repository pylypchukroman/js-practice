//'use strict';
​
// function test(arrTmp, num) {
//     arrTmp[0] = num;
// }
​
// function test1() {
//     const arr = [1, 2, 3, 4];
​
//     test(arr, 5);
​
//     console.log(arr);
// }
​
// test1();
​
/*-------------------*/
​
// function tmpFn1() {
​
// }
​
// const sum = function () {
//     let total = 0;
//     console.log(arguments);
//     for (let i = 0; i < arguments.length; i++) {
//         console.log('I ->', i);
//         total += arguments[i];
//         console.log('Total ->', total);
​
//     }
// };
​
// sum(1,2,3);
​
​
/*--------------------*/
​
// function withdraw(amount, balance) {
//     if (amount === 0)
//         return "Для проведения операции введите сумму больше нуля";
//     if (amount > balance)
//         return "Недостаточно средств на счету";
​
//     return "Операция снятия средств проведена успешно";
​
// }
​
// const res1 = withdraw(0, 300);
// const res2 = withdraw(500, 300);
// const res3 = withdraw(100, 300);
​
// console.log(res1);
// console.log(res2);
// console.log(res3);
​
/*-----------------*/
​
// const test = 15;
​
// console.log(test);
​
// const fn1 = function () {
//     const test = 78;
//     return test;
// }
​
// console.log(fn1());
​
// console.log(test);
​
/*-----------------*/
​
// function bar() {
//     console.log("bar");
// }
​
// function baz() {
//     console.log("baz");
// }
​
// function foo() {
//     console.log("foo");
//     bar();
//     baz();
// }
​
// foo();
​
/*---------------*/
​
​
// рекурсивный вызов
​
// const fn = function (length, arr = [], i = 0) {
//     arr.push(i);
//     if (length-1 <= i)
//         return arr;
​
//     return fn(length, arr, ++i);
// }
​
// console.log(fn(10));
​
​
//замыкание
​
// const fn = function () {
//     let iterator = 0;
​
//     const tmp = function () {
//         iterator += 1;
//         return iterator;
//     };
​
//     return tmp;
// }
​
// const fnIterator = fn();
​
// for (let iterator = fn(); iterator() <= 10;) {
//     console.log('ok');
// }