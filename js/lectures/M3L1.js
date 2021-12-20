// const human = {
//     name: "Bill",
//     age: 25,
//     phone: ['+380504457896', '+380734578963'],
//     getCity: function () {
//         return human.location.city;
//     },
//     getFirstPhone: function() {
//         return human.phone[0];
//     },
//     location: {
//         country: "Jamaica",
//         city: "Ocho Rios",
//     }
// };
​
// console.log(human.getCity());
// console.log(human.getFirstPhone());
// console.log(human.location.country);
// console.log(human.phone[1]);
​
// let key = "age";
​
// console.log(human.name);
// console.log(human[key]);
​
/*---------------*/
​
​
// const name = "Bill";
// const age = 25;
// const key = "test";
​
// const user = { name, age };
// const user1 = { name, age };
// const user2 = {
//     name, age,
//     [key]: age
// }
// console.log(user);
// console.log(user1);
// console.log(user1 === user);
// console.log(user2);
​
​
/*------------*/
​
// const bookShelf = {
//     books: ["The Last Kingdom"],
//     getBooks() {
//         return this.books;
//     },
//     addBook(bookName) {
//         this.books.push(bookName);
//     },
//     removeBook(bookName) {
//         const bookIndex = this.books.indexOf(bookName);
//         this.books.splice(bookIndex, 1);
//     },
// };
​
// const obj = {
//     name: "devOPS",
//     description: "dfjhvbdlfvdf kidlfvds blkff",
//  };
​
// bookShelf.magazine = obj;
​
// console.log(bookShelf);
​
// console.log(bookShelf.getBooks());
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks());
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks());
​
​
/*---------------*/
​
// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
​
// for(const key in book) {
//     console.log(book[key]);
// }
​
// console.log("---------------");
// const arr = ["Bill", "Jhony", "Tom"];
​
// for (const item of arr) {
//     console.log(item);
// }
​
/*------------*/
​
// const animal = {
//     legs: 4
// };
// ​
// const dog = Object.create(animal);
// ​
// dog.name = 'Fox';
​
// console.log(dog.hasOwnProperty("name"));
// console.log(dog.hasOwnProperty("legs"));
​
// console.log(dog);
// console.log(dog.legs);
// console.log(dog.name);
​
// const book = {
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//     title: "The Last Kingdom",
// };
​
// for (const key in book) {
//     if (book.hasOwnProperty(key))
//         console.log(book[key]);
// }
​
// for (const key of Object.keys(book)) {
//     console.log(key);
// }
​
// console.log('-----------');
​
// for (const value of Object.values(book)) {
//     console.log(value);
// }
​
// console.log('------------');
​
// for (const entri of Object.entries(book)) {
//     console.log(entri[0], '=' , entri[1]);
// }
​
/*--------------*/
​
// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//         name:"ttt"
//     },
//     {
//         title: "На берегу спокойных вод",
//         author: "Роберт Шекли",
//         rating: 8.51,
//     },
//     {
//         title: "Сон смешного человека",
//         author: "Федор Достоевский",
//         rating: 7.75,
//     },
// ];
// ​
// delete books[0].name;
​
// for (const item of books) {
//     if (item.hasOwnProperty("title"))
//         console.log(`Книга ${item.title} по авторству ${item.author}`);
// }
​
// console.log('---------------');
// for (const item of books) {
//     if (item.rating >= 8)
//         console.log(`Книга ${item.title} по авторству ${item.author}`);
// }
​
// const addBook = function (title, author, rating) {
//     books.push({ title, author, rating });
// }
​
// const removeBook = function (title) {
//     for (let book of books) {
//         if (book.title === title) {
//             books.splice(books.indexOf(book), 1);
//             break;
//         }
//     }
// }
​
// addBook("Война и мир", "Лев Толстой", 7.5);
​
// console.log(books);
​
// removeBook("На берегу спокойных вод");