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

//Ej 1.2: Operador ternario

function puedeConducir(edad) {
  return edad >= 18 ? "Puedes conducir" : "No puedes conducir";
}
console.log(puedeConducir(20));

function esMayor(num1, num2) {
  return num1 > num2 ? `${num1} es mayor` : `${num2} es mayor`;
}
console.log(esMayor(1, 32));

function numberType(num) {
  return num === 0
    ? `${num} es igual a 0 `
    : num < 0
    ? `${num} es negativo`
    : `${num} es positivo`;
}

console.log(numberType(-9));

function encontrarMaximo(num1, num2, num3) {
  return num1 > num2 && num1 > num3
    ? `El valor máximo es: ${num1}`
    : num2 > num1 && num2 > num3
    ? `El valor máximo es: ${num2}`
    : `El valor máximo es: ${num3}`;
}

console.log(encontrarMaximo(20, 60, 3));
