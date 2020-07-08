// parent Vehicle class
class Ninja {
    constructor(name, health, speed, strength) {
        this.name = name;
        this.health = 0;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        // this.miles += 10;
        console.log(`The name is: ${this.constructor.name}`);
    }
    drinkSake() {
        this.health += 10;
        console.log(`Added ${this.health} to ninja from drinking Sake!`);
    }
    showStats() {
        console.log(`Name: ${this.name}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }
}

const Nin = new Ninja("Tom");
Nin.sayName();
Nin.showStats();
Nin.drinkSake();
// console.log(Nin.health)

// child M5 class
// class M5 extends Vehicle {
//     constructor(color) {
//         super("BMW", "M5", color);
//     }
//     // simple function in the child class
//     childFunction() {
//         // by using super, we can call the parent method
//         const message = super.parentFunction();
//         console.log(message);
//     }
// }

