// const animal = {
//     legs: 4,
//     getCountLegs() {
//         console.log(this.legs);
//     }
// }

// const cat = Object.create(animal);

// cat.name = "Fox";

// const human = Object.create(animal);
// human.legs = 2;
// human.name = "Bill";

// console.log(human.legs);
// console.log(cat);

// const str = new String('Привет');
// const str1 = '';

// console.log(str);

/*----------------*/

// const car = {
//     isOn: false,
//     start() {
//         this.isOn = true;
//     },
//     stop() {
//         this.isOn = false;
//     }
// }

/*--------------*/

// class Car {

//     static MIN_PRICE = 1000;
//     static MAX_PRICE = 100000;

//     wheel = 4;
//     speed = 0;
//     #isOn = false;
//     #gear = 0;
//     #clutch = false;
//     #color;
//     #bodyType;
//     #isOpenRoof = false;

    // constructor(color, bodyType) {
    //     this.#color = color;
    //     this.#bodyType = bodyType;

    //     this.openRoof();
    // }

    // get isOn() {
    //     return this.#isOn;
    // }

    // set isOn(value) {
    //     this.#isOn = value;
    //     if (!this.#isOn)
    //         this.speed = 0;
    // }

    // get gear() {
    //     return this.#gear;
    // }

    // set gear(value) {
    //     this.#clutch = true;
    //     this.#changeGeare(value);
    // }

//     closeRoof() {
//         if (this.#bodyType !== 'cabriolet') return false;
//         this.#isOpenRoof = false;
//     }

//     openRoof() {
//         if (this.#bodyType !== 'cabriolet') return false;
//         this.#isOpenRoof = true;
//     }

//     #changeGeare(gear) {
//         if (!this.#clutch) return false;
//         this.#gear = gear;
//         this.#clutch = false;
//     }

//     move(speed) {
//         if (!this.#isOn) return false;
//         this.speed = speed;
//     }
// }

// class Truck extends Car {
//     #loadWeight;
//     wheel = 6;
//     static MIN_PRICE = 50000;

//     constructor(color, loadWeight) {
//         super(color, "truck");
//         this.#loadWeight = loadWeight;
//     }
// }

// const lada = new Car("grey", "sedan");
// const BMW = new Car("red", "cabriolet");

// const volvo = new Truck("black", 5000);

//  console.log(volvo);

// lada.isOn = true;

// lada.gear = 2;

// lada.move(50);

// lada.isOn = false;

// console.log(lada.isOn);

// console.log(Car.MAX_PRICE);
// console.log(Truck.MIN_PRICE);

// console.log(BMW);
// console.log(lada);


/*-----------------*/

// String.prototype.aleOp = function() {
//    return this[0].toUpperCase() + this.slice(1);
// }
// Array.prototype.ogooog = function() {
//     return this[1];
// }

// Car.prototype.testDrive = function() {
//     console.log(this);
// }