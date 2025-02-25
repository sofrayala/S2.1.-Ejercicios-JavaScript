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

const parOImpar = (num) => {
  let resultado = "";
  for (let i = 0; i < num.length; i++) {
    resultado += num[i] % 2 === 0 ? "Par " : "Impar ";
  }
  return resultado;
};

const test3 = [1, 5, 8];
console.log(parOImpar(test3));

//Ejercicio 1.3: Callbacks

function procesar(num, callBack) {
  callBack(num);
}

function calculator(num1, num2, callBackCalc) {
  return callBackCalc(num1, num2);
}
function sumar(a, b) {
  return a + b;
}

const result = calculator(3, 1, sumar);
console.log(result);

function esperarISaludar(nom, callBack) {
  setTimeout(() => {
    callBack(nom);
  }, 2000);
}

function processElements(array, callBack) {
  for (let i = 0; i < array.length; i++) {
    callBack(array[i]);
  }
}

function processString(string, callBack) {
  let upperCaseString = string.toUpperCase();
  callBack(upperCaseString);
}

//Ejercicio 1.4: Rest & Spread operators

const arrayOne = [1, 2, 3];
const arrayTwo = [4, 5, 6];
const combinedArray = [...arrayOne, ...arrayTwo];
console.log(combinedArray);

function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}
let test4 = sum(1, 2, 3);
console.log(test4);

const obj1 = {
  nombre: "Pepi",
  edad: 18,
};
const obj2 = { ...obj1 };
obj2.edad = 20;
console.log(obj1);
console.log(obj2);

const nums = [1, 2, 3, 4, 5];
let a, b, rest;
[a, b, ...rest] = nums;
console.log(a);
console.log(b);
console.log(rest);

function add1(a, b, c) {
  return a + b + c;
}
const elements = [1, 2, 3];

console.log(add1(...elements));

const obj3 = {
  especie: "Gato",
  edad: 16,
};

const obj4 = {
  peso: 40,
  edad: 18,
  color: "rayado",
};

const mergedObjs = { ...obj3, ...obj4 };
console.log(mergedObjs);

//Ejercicio 1.5: Array transformations

const arr = [1, 2, 3, 4];
const map1 = arr.map((x) => x * x);
console.log(map1);

const filter1 = arr.filter((x) => x % 2 === 0);
console.log(filter1);

const arr2 = [1, 10, 8, 11];
const found = arr2.find((x) => x > 10);
console.log(found);

const arr3 = [13, 7, 8, 21];
const totalSum = arr3.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(totalSum);

const arr4 = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

const filterDoubleSum = (arr4) =>
  arr4
    .filter((x) => x >= 10)
    .map((x) => x * 2)
    .reduce((sum, x) => sum + x, 0);

const resultEx5 = filterDoubleSum(arr4);
console.log(resultEx5);

const arr5 = [11, 12, 13, 14];
const greaterThan = (x) => x > 10;
console.log(arr5.every(greaterThan));
console.log(arr5.some(greaterThan));

//Exercise 1.6: Array loops
let names = ["Anna", "Bernat", "Clara"];
names.forEach((x) => console.log(x));

for (const element of names) {
  console.log(element);
}

let numbers = [1, 2, 3, 4, 5, 6];
let newNums = numbers.filter((x) => x % 2 === 0);
console.log(newNums);

let obj5 = { name: "Ona", age: 25, city: "Barcelona" };
for (const property in obj5) {
  console.log(`${property}: ${obj5[property]}`);
}

let numbers1 = [1, 2, 3, 4, 5, 6];
for (const element of numbers1) {
  console.log(element);
  if (element === 5) {
    break;
  }
}

for (const [index, name] of names.entries()) {
  console.log(`Index: ${index}, Value: ${name}`);
}

// Exercise 1.7: Promises & Async/Await
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello World");
  }, 2000);
});

myPromise.then((result) => {
  console.log(result);
});
