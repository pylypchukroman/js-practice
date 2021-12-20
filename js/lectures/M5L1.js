'use strict';

console.log("OK");
// const contact = {
//     name: "Bill",
//     showName() {
//         console.log(this);
//     }
// };
// contact.showName();

// const test = contact.showName;

// test();

// contact.test1 = test;

// contact.test1();

/*-----------------*/

// const user = {
//     name: "Bill",
//     lname: "Gray"
// };

// const showFullName = function (a, b, c, ...params) {
//     console.log(a, b, c, params);
//     console.log(this.name, this.lname);
// };

// user.show = showFullName;
// user.show();

// showFullName.call(user, 1, 2, 3);
// showFullName.apply(user, [1, 2, 3]);
// const newFn = showFullName.bind(user, 1, 2, 7);

// newFn(9,6,11);
// showFullName.call(user, 1, 2, 7);


/*----------------*/


// const fn = () => {
//     console.log(this);
// };

// fn.call({ name: "Bill" });
// const newFn = fn.bind({ name: "Bill" });
// newFn();

// const foo = function (...params) {
//     console.log(this);
//     const res = params.map(item => this.test + `-${item}`);
//     console.log(res);
// }

// foo.call({ test: 'TEST' }, 1, 2, 3, 4);

// console.log(this);

// (function(item) {
//     console.log(this)
// })()

// const fn = item => console.log(this);
// fn();

/*-------------------------*/