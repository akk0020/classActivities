// refactor the functions below into arrow syntax

// func declaration
function myNumberFunction() {
  return ((2 ** 2 + 3) % 4) * 14;
}

// arrow syntax (concise)
// const myNumberFunction = () => ((2 ** 2 + 3) % 4) * 14;

// block
const myNumberFunction = () =>{
  return ((2 ** 2 + 3) % 4) * 14;
}




// func declaration
function greet(name) {
  return `Hello, ${name}`;
}

// arrow syntax (concise)
const greet = (name) => `Hello, ${name}`;




// func declaration
// const timeOfDayGreet = function(name, timeOfDay) {
//   return `Hello, ${name}, good ${timeOfDay}`;
// };

// arrow syntax (concise)
const timeOfDayGreet = (name, timeOfDay) => `Hello, ${name}, good ${timeOfDay}`;

// func declaration
function tripleAndHalf(num) {
  let triple = num * 3;
  return triple / 2;
}

// arrow syntax
// const tripleAndHalf = (num) => let triple = num * 3; return triple / 2;

// func declaration
function sumTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
}

// arrow syntax
const sumTwoNumbers = (num1, num2) => {let sum = num1 + num2;
console.log(`The sum of your numbers is ${sum}.`);
return sum;
}




//function add(a,b) (numberA, NumberB doesnt matter what does in here) {
// return a + b;
// }

// invoke function

//let sum = add(1,4);
// console.log(sum)

// turn into arrow syntax

// const add = (a,b) => a + b
// console.log(add(4,4))

//    or

// const greet = () => "hello friend";
// console.log(greet());
//   or

// const multiply = (x,z) => x*z     parameters for this one

// console.log(multiply(4,4));    invoke arguments
