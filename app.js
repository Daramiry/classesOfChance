class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    brag() {
        console.log("My car is a " + this.year + " " + 
             this.brand + " " + this.model + "!");
    }
}


class Calculator {
    addNums(num1, num2) {
        return (num1 + num2);
    }
}


// TESTS

const calc = new Calculator();
calc.addNums(7, 33);
// > 40

// const myCoolCar = new Car('Ford', 'Mustang', 2022)
// myCoolCar.brag();

// const myCasino = new Casino("HackerU Casino");
// console.log(myCasino);
// myCasino.playGame(5);
// myCasino.playGame(15);
// myCasino.playGame(25);
// myCasino.playGame(35);

// BONUS TESTS
/*
const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);
*/

// Extra BONUS TESTS
/*
const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);
*/
