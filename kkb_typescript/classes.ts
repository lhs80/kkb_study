// class Greeter {
//     greeting: string;
//
//     constructor(message: string) {
//         this.greeting = message;
//     }
//
//     greet() {
//         return "Hello" + this.greeting
//     }
// }
//
// let greeter = new Greeter(" best you");
// console.log(greeter.greet())

class Animal {
    name: string;

    constructor(theName: string) {
        this.name = theName;
    }

    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`)
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name)
    }

    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters)
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name)
    }

    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters)
    }
}

let sam = new Snake("sammy");
let tom = new Horse("Tom");
sam.move()
tom.move();

// class Dog extends Animal {
//     bark() {
//         console.log("Woof!Woof!")
//     }
// }
//
// const dog = new Dog('Dog');
// dog.bark();
// dog.move(10);
// dog.bark();
