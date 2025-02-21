// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
// string number boolean undefined null
let name = "andrew";
let age = 39;
let satisfied = true;
let favoriteThing;
let empty = null;
// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(
  typeof name,
  typeof age,
  typeof satisfied,
  typeof favoriteThing,
  typeof empty
);
// create a variable that references a template literal
// inside the template literal, use two of the above variables
let myinfo = `My name is ${name} and im ${age} years old.`;
// reassign the value of the variable that references "null"
empty = 0;
// print the value and its type
console.log(empty, typeof empty);

// print a variable that causes a ReferenceError
console.log(favoriteSong);
// alter the previous line to no longer cause a ReferenceError
let favoriteSong = "favoriteeee song";
