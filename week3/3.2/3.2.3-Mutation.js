let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};
// reassign x, y, and z to FALSY values

x = 0;
y = null;
z = undefined;

// print x, y, and z
console.log("x", x);
console.log("y", y);
console.log("z", z);

const a = "name";
const b = [];
const c = {};
// try to reassign a, b, and c to FALSY values
// cant bc const

// using BRACKET NOTATION, assign a value to b
b[0] = "hello";

// using DOT NOTATION, assign a PROPERTY to c
c.age = 39;

// using DOT NOTATION, assign a METHOD to c
c.greet = function() {
  return "hello friend";
};

// using BRACKET NOTATION, call the method in c
console.log(c["greet"]());

// print a, b, and c
console.log("a", a);
console.log("b", b);
console.log("c", c);
