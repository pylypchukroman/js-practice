
'use strict';

console.log("OK");// const test = [1, 2, 3, 4, 5, 6];

// const test1 = [
//     { test: 1 },
//     { test: 2 },
//     { test: 3 },
//     { test: 4 }
// ]

// console.log(...test1);
// console.log(test1[0], test1[1], test1[2], test1[3]);


// console.log(Math.max(...test));
// console.log(Math.min(...test));

/*---------------*/


// const test = [1, 2, 3, 4, 5];
// const test1 = [6, 7, 8, 9, 10];

// const testCopy = [-8, ...test, 88, ...test1, 12, ...[77, 88, 99]];

// //testCopy[0] = 5;

// console.log(testCopy === test);
// console.log(test);
// console.log(testCopy);


/*----------------*/

// const user = {
//     name: "Bill",
//     age: 30
// };

// const user1 = {
//     age: 25
// }

// const userCopy = {
//     ...user,
//     age: 78,
//     ...user1,
//     name: "Tom",
//     phone: "+380xxxxxxx"
// };

// const userTest = {
//     name: user.name,
//     age: user.age,
//     age: user1.age
// }


// const obj = {};

// console.log(userTest);
// console.log(userCopy);

// const user = {
//     name: "Bill",
//     age: 25
// };

// const user1 = {...user};

// console.log(user === user1);
// console.log(user, user1);

/*---------------------------*/

// const sum = function (firstParam, secondParams, ...params) {
//     let total = 0;
//     console.log('f ->', firstParam);
//     console.log('s ->', secondParams);
//     console.log('p ->', params);
//     for (const item of params) {
//         total += item;
//     }
//     return total;
// }
// const arr = [1, 2, 3, 4];

// console.log(sum(1, 2, 3, 4));

/*--------------------*/

// const user = {
//     name: "Bill",
//     age: 25,
//     phone: ["+380504455896", "+380504488523"],
//     address: "Ломоносова 5"
// };

// const {
//     age: old = 99,
//     name,
//     phone,
//     address = "TEST TEST"
// } = user;

// phone[0] = "test";

// console.log(user);
// console.log(old, name, phone, address);

/*-----------------*/

// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// const {
//     name,
//     tag,
//     stats: {
//         followers,
//         views: userViews,
//         likes: userLikes = 0
//     },
// } = user;

// console.log(name);
// console.log(tag);
// console.log(followers);
// console.log(userViews);
// console.log(userLikes);

/*------------------------*/

// const rgba = [155, 44, 78, 0.3];

// const [,, blue, alfa = 0.3] = rgba;
// const [red, green, blue, alfa = 0.3] = rgba;
// const [red, green, ...colors] = rgba;
// console.log(red, green, colors);
// console.log(`R:${red},G:${green},B:${blue},A:${alfa}`);

// const user = {
//     name: "Bill",
//     age: 25,
//     phone: ["+380504455896", "+380504488523"],
//     address: "Ломоносова 5"
// };

// for (const item of Object.entries(user)) {
//     console.log(item[0], item[1]);
// }

// for (const [key, value] of Object.entries(user)) {
//     console.log(key, value);
// }

/*-----------------------*/

// const user = {
//     name: "Bill",
//     age: 25,
//     phone: ["+380504455896", "+380504488523"],
//     address: "Ломоносова 5"
// };


// // const showUser1 = function ({...params}) {
// //     console.log(params);
// // }
// const showUser = function ({ phone: [,secondPhone], ...params }) {
//     console.log(secondPhone);
//     console.log(params);
// }

// // showUser1(user);
// showUser({
//     name: "Bill",
//     age: 25,
//     phone: ["+380504455896", "+380504488523"],
//     address: "Ломоносова 5"
// });

/*----------------------*/