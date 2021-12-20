// const showStr = function(str, cb) {
//     cb(str);
// }
​
// const logger = function(str1) {
//     console.log(`log -> ${str1}`);
// }
​
// showStr("hello wolrd", logger);
​
// showStr("Hello BC13", function(str) {
//     console.log(`GOIT -> ${str}`);
// })
​
​
/*------------------*/
​
// const user = {
//     name: "Bill",
//     age: 25
// };
​
// const isAdult = function (user, success, error) {
//     if (user.age >= 18) {
//         success(user.name);
//     } else {
//         error(user.name);
//     }
// }
​
// // const success = function(name) {
// //     console.log(`${name} -> OK`);
// // }
​
// // const error = function(name) {
// //     console.log(`${name} -> NOT OK`);
// // }
​
​
// isAdult(user, success, error);
​
/*-----------------*/
​
// function printValue(value) {
//     console.log(value);
// }
​
// function prettyPrint(value) {
//     console.log("Logging value: ", value);
// }
​
// function repeat(n, action) {
//     for (let i = 0; i < n; i += 1) {
//         action(i);
//     }
// }
​
// console.log(printValue);
​
// repeat(3, printValue);
​
​
// repeat(3, prettyPrint);
​
​
/*----------------*/
​
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
​
// const callback = function (item, index, array) {
//     console.log(`${index} -> ${item}`, array);
// }
​
// const forEach = function (arr, cb) {
//     for (const item of arr) {
//         cb(item, arr.indexOf(item), arr);
//     }
// }
​
// arr.forEach(callback);
​
// console.log('----------------------');
​
// forEach(arr, callback)
​
/*---------------*/
​
// const user = {
//     name: "Bill",
//     age: 30,
//     phone: ["+38050xxxxxxx", '+38050xx44xxxxx']
// }
​
// Object.entries(user).forEach(function ([key, value], index, arr) {
//     console.log(arr);
//     console.log(`${key} -> ${value}`, index);
// })
​
/*----------------*/
​
// const fn = function (x, y) {
//     return x + y;
// }
​
// const fn1 = (x, y) => {
//     return x + y;
// }
​
// const fn2 = x => 2 ** x;
​
//console.log(fn2(10));
​
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
​
// arr.forEach(item => console.log(2 ** item));
// arr.forEach((item, index) => console.log(`element: ${item} | index: ${index}`));
​
// const fn3 = () => "TEST";
​
// arr.forEach(function (item) {
//     console.log(2 ** item);
// })
​
/*-----------------------------*/
​
// const getRandomNum = function (min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
// }
​
// const getRandomNumArrow = (min, max) => Math.floor(Math.random() * (max - min) + min);
​
​
// console.log(getRandomNumArrow(5,10));
​
// const user = {
//     name: "Bill",
//     age: 30,
//     phone: ["+38050xxxxxxx", '+38050xx44xxxxx']
// }
​
// Object.entries(user).forEach(([key, value]) => {
//     if (key !== 'phone')
//         return console.log(`${key} -> ${value}`);
// });
​
// const fn = (name, age) => {
​
//     return { name, age }
// };
​
// console.log(fn('Bill', { t1: '1', t2:'2', t3: '3' }));
​
// Object.entries(user).forEach(function ([key, value]) {
//     console.log(`${key} -> ${value}`);
// })
​
/*---------------*/
​
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
​
// for (let i = 0; i < arr.length; i++) {
//     console.log(i);
// }
​
// arr.forEach(item => console.log(item));
​
/*--------------*/
​
​
// const test = cb => cb();
​
// const fn = () => {
//     console.log(5);
//     return 'ok';
// }
​
// console.log(test(fn));
​
/*--------------*/