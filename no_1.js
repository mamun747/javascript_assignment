//! 1 no
function scopeTest() {
  if (true) {
    var varVariable = "I am var"; // var is global scope
    //   let letVariable = "I am let";
    //   const constVariable = "I am const";
  }
  console.log(varVariable); // var is global scope
  // console.log(letVariable); // let is block scope
  // console.log(constVariable); // const is block scope
}

scopeTest();

//! 2 no
function greet(name, greeting = "Hello") {
  return `${greeting}, ${name}`;
}
console.log(greet("Alice"));
console.log(greet("Bob", "Good morning"));

// ! 3no
function sum(...no4) {
  return no4.reduce(function (total, num) {
    return total + num;
  });
}
console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30, 40)); // 100
console.log(sum(5)); // 5

// ! 4no
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];
const mergedArray = [...array1, ...array2, ...array3];
console.log(mergedArray);

// ! 5no
const name = "john doe";
const age = 18;
const person = {
  name,
  age,
  greet() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  },
};
console.log(person.greet());

// ! 6no
const fruits = ["apple", "banana", "cherry"];

for (let i of fruits) {
  console.log(i);
}

// ! 7no
const name2 = "Alice";
const age2 = 25;

// Your code here
const message = `My name is ${name2} and I am ${age2} years old.`;
console.log(message); // "My name is Alice and I am 25 years old."

// ! 8no
const students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 85 },
  { name: "Charlie", grade: 92 },
];

for (let info of students) {
  console.log(`Name: ${info.name}, Grade: ${info.grade}`);
}

// ! 9no
const nestedArrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i of nestedArrays) {
  sum = null;
  for (let n of i) {
    sum += n;
  }
  console.log(`Sum of ${i.join(" + ")} = ${sum}`);
}

// ! 10no
const a = 5;
const b = 10;

// Your code here
const result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result); // "The sum of 5 and 10 is 15."