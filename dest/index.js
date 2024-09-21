"use strict";
class Car {
    // Constructor to initialize properties
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Implement the start method
    start() {
        console.log("Car engine started");
    }
}
const myCar = new Car("Toyota", "Corolla", 2020);
myCar.start();
