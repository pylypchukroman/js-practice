'use strict';

console.log("OK");
// const arr = [1, 2, 3, 4, 5];

/**
* return: undefined
* чистая || не чистая
* callback params: item, index, array
*/
// arr.forEach((item, index, array) => { });

/**
 * return: []
 * чистая
 * callback params: item, index, array
 */
// const mapArr = arr.map((item, index, array) => {
//     return item * 2;
// });

/**
 * return: []
 * чистая
 * callback params: item, index, array
 */
// const mapFlatArr = arr.flatMap((item, index, array) => {
//     return item * 2;
// });

/**
 * return: []
 * чистая
 * callback params: item, index, array
 */
// const filterArr = arr.filter((item, index, array) => {
//     return (item % 2 === 0)
// })

/**
 * return: item
 * чистая
 * callback params: item, index, array
 */
// const findArr = arr.find((item, index, array) => {
//     return (item % 2 === 0);
// })

/**
 * return: index
 * чистая
 * callback params: item, index, array
 */
// const findIndexArr = arr.findIndex((item, index, array) => {
//     return (item % 2 === 0);
// })

/**
 * return: true || false
 * чистая
 * callback params: item, index, array
 */
// const everyArr = arr.every((item, index, array) => {
//     return (item % 2 === 0);
// })

/**
 * return: true || false
 * чистая
 * callback params: item, index, array
 */
// const someArr = arr.some((item, index, array) => {
//     return (item % 2 === 0);
// })

/**
 * return: any
 * чистая
 * callback params: acc, item, index, array
 */
// const reduceArr = arr.reduce((acc, item, index, array) => {
//     return acc + item;
// }, 0);

/**
 * return: []
 * не чистая
 * callback params: item1, item2
 */
// arr.sort((a, b) => b - a);


/*----------------*/

// const fn = (arr) => {
//     arr.forEach((item, index) => {
//         arr[index] = item * 2;
//     });

//     return arr;
// }


// const fn1 = (arr) => {
//     const arr1 = [...arr];

//     arr1.forEach((item, index) => {
//         arr1[index] = item * 2;
//     });

//     return arr1;
// }

// const arr = [1,2,3,4,5,6];

//fn1(arr);
// console.log(arr);
// fn1(arr);
// console.log(arr);


/*--------------*/

// const students = [
//     { name: "Манго", score: 83 },
//     { name: "Поли", score: 59 },
//     { name: "Аякс", score: 37 },
//     { name: "Киви", score: 94 },
//     { name: "Хьюстон", score: 64 },
// ];

// console.log(students.map(item => item.name));
// console.log(students);


// const students = [
//     { name: "Манго", courses: ["математика", "физика"] },
//     { name: "Поли", courses: ["информатика",[1,2,34], "математика"] },
//     { name: "Киви", courses: ["физика", "биология"] },
// ];

// console.log(students.map(student => student.courses).flat(1));
// console.log(students.flatMap(student => student.courses));
// console.log(students);

// const testFilterArr = arr.filter(item => !(item % 2));

// console.log(testFilterArr);

// const HIGH_SCORE = 80;
// const students = [
//     { name: "Манго", score: 83 },
//     { name: "Поли", score: 59 },
//     { name: "Аякс", score: 37 },
//     { name: "Киви", score: 94 },
//     { name: "Хьюстон", score: 64 },
// ];

// const best = students.filter(({ name, score}) => name === "Аякс" && score > 10);
// console.log(best);


// const arr1 = [1, 2, 3, 4, 4, 5, 2, 1, 6, 7, 2, 1];

// const uniqArr = arr1.filter(
//     (item, index, array) => index === array.indexOf(item)
// );

// console.log(uniqArr);

// const colorPickerOptions = [
//     { label: "red", color: "#F44336" },
//     { label: "green", color: "#4CAF50" },
//     { label: "blue", color: "#2196F3" },
//     { label: "pink", color: "#E91E63" },
//     { label: "indigo", color: "#3F51B5" },
// ];

// console.log(colorPickerOptions.findIndex(
//     option => option.label === "blue"
//     ));


// const arrTest = [1, 2, 3, 4, 5, 6];

// console.log(arrTest.every(item => item % 2 === 0));
// console.log(arrTest.some(item => item % 2 === 0));

/*-----------------*/

// const reduce = (arr, cb, defAcc) => {
//     let acc = (defAcc === undefined) ? arr[0] : defAcc;

//     for (const item of arr) {
//         if (defAcc === undefined && arr.indexOf(item) === 0)
//             continue;
//         acc = cb(acc, item, arr.indexOf(item), arr);
//     }

//     return acc;
// }

// console.log(reduce(arr, (acc, item) => acc + item, 5));
// console.log(arr.reduce((acc, item) => acc + item, 5));

// const students = [
//     { name: "Манго", score: 83 },
//     { name: "Поли", score: 59 },
//     { name: "Аякс", score: 37 },
//     { name: "Киви", score: 94 },
//     { name: "Хьюстон", score: 64 },
// ];

// console.log(
//     students.reduce(
//         (acc, { name }) => acc + `, ${name}`, ''
//     )
//     .slice(2)
// );


// const players = [
//     { name: "Mango", playTime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playTime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playTime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playTime: 241, gamesPlayed: 1 },
// ];

// const res = players.reduce((acc, item) => {
//     const obj = {};
//     obj.name = item.name;
//     obj.averageTime = item.playTime / item.gamesPlayed;
//     acc.push(obj);
//     return acc;
// }, [])

// console.log(res);

/*----------------*/

/**
 * 4,2,5,1,3
 * 2,4,5,1,3
 * 2,4,5,1,3
 * 2,4,1,5,3
 * 2,4,1,3,5
 *
 * 2,4,1,3,5
 * 2,1,4,3,5
 * 2,1,3,4,5
 *
 * 1,2,3,4,5
 *
 */

// const numbers = [4, 2, 5, 1, 3];
// numbers.sort((a, b) => b - a);
// console.log(numbers);

// const players = [
//     { name: "Mango", playTime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playTime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playTime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playTime: 241, gamesPlayed: 1 },
// ];
// const testSort = ["test", 12, 44, 44, 11, 1, 5, 'Привет', 'привет', 8, 22, 44, 6, 'hi', 'Hi'];

//testSort.sort((a, b) => a.toString().localeCompare(b));
// testSort.sort();

// console.log(testSort);


/*---------------------*/

// const students = ["Вика", "Андрей", "Олег", "Юля", "Борис", "Катя"];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));


// const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];


// const tagsUniq = tweets
//     .flatMap(item => item.tags)
//     .filter((item, index, array) => index === array.indexOf(item))
//     .map(item => item.toUpperCase())
//     .sort()

// console.log(tagsUniq);