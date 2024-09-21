interface Vehicle {
    make: string
    model: string
    year: number
    start(): void
}

class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    // Constructor to initialize properties
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Implement the start method
    start(): void {
        console.log("Car engine started");
    }
}

const myCar = new Car("Toyota", "Corolla", 2020);

myCar.start();

