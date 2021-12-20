// const age = 14;
​
// if (age >= 18) {
//     console.log('OK');
// } else if (age >= 16) {
​
// } else if (age >= 14) {
​
// } else if (age >= 10) {
​
// } else if (age >= 8) {
//     console.log('NOT OK');
// } else {
//     console.log('NOOOOT OK');
// }
​
​
// let type;
// const age = 20;
​
// if (age >= 18) {
//   type = "adult";
// } else {
//   type = "child";
// }
​
// console.log(type);
​
/*-------------*/
​
​
// const age = 12;
// let type = age >= 18 ? "adult" : "child";
​
// console.log(type);
​
​
/*--------------*/
​
// const type = "1";
// let code;
​
// switch(type) {
//     case "phone":
//     case "1":
//     case "address": code = "fvdfv875"; break;
​
//     default: code = "00000";
// }
​
// if (type === 'phone') {
//     code = "gf7d845";
// } else if (type === '1') {
//     code = "vsdfvf45";
// } else if (type === 'address') {
//     code = "fvdfv875";
// } else {
//     code = "00000";
// }
​
// console.log(code);
​
/*----------------------*/
​
// const test = 15;
​
// if (true) {
//    // const test = 20;
​
//     const test1 = 5;
//     //if(true) {
//         const test2 = test + test1;
//     //}
​
//     // console.log(test2);
//     // console.log(test1);
//     console.log(test);
// }
​
// console.log(test);
​
/*-------------------*/
​
// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i += 1;
// }
​
// let i = 0;
// do {
//     console.log(i);
//     i += 1;
// } while (i < 10);
​
// let password = "";
​
// do {
//   password = prompt("Введите пароль длиннее 4-х символов", "");
// } while (password.length < 5);
​
// console.log("Ввели пароль: ", password);
​
// for (let i = 0; i <= 10; i+=1) {
//     console.log(i);
// }
​
/*------------*/
​
// let i = 0;
​
// console.log(i--); // 0
// console.log(--i); // 2
// console.log(i--); // 2
// console.log(i);   // 3
​
/*-----------*/
​
// const str = "подотряд класса пресмыкающихся отряда чешуйчатые1";
// let res = "";
// for (let i = 0; i < str.length; i++) {
//     //console.log(res, i % 2);
//     if (i % 2) {
//         res += "*";
//     } else {
//         res += str[i];
//     }
// }
// ​
// console.log(res);
// res = '';
// ​
// for (let i = 0; i < str.length; i += 2) {
//     res += str[i];
//     if (i < str.length - 1)
//         res += '*';
// }
// ​
// console.log(res);