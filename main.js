//Ej 1.1 Arrow functions
const add = (a, b) => a + b;

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

class Person {
  constructor(name) {
    this.name = name;
  }

  greet = () => {
    console.log(`Hola, ${this.name}`);
  };
}

const test1 = new Person("Pedro");
test1.greet();

const printNumbers = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
};

const test2 = [2, 4, 6, 8, 10, 12];
printNumbers(test2);

setTimeout(() => {
  console.log("Delayed for 3 seconds.");
}, 3000);

setTimeout(() => {
  console.log("Delayed 5 seconds");
}, 5000);
