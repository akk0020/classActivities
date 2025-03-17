// wrap the code below in a function called "addNumbersFrom1To100" and return the total
// ! do not use console.log inside your function

function addNumbersFrom1To100() {
  let total = 0;
  for (let i = 1; i <= 100; i++) {
    total += i;
    // total = total + i; longhand
  }
  return total;
}

// invoke the function and console.log its value
console.log(addNumbersFrom1To100());

// try to print the variable "total" outside the function // Wont work outside of functions scope
// ? what do you expect ?
// eslint-disable-next-line no-undef
console.log(total);
// to make it run gotta create a new variable outside of scope

// examine the code below,
// ? which console.log statement will not print when you invoke the parentAndChildScope function ?
function childScope(param) {
  const childVariable = "I am in the child's scope";
  console.log("Child Scope, Parent Variable:", param);
  console.log("Child Scope, Child Variable:", childVariable);
}

// childScope(childVariable);

// eslint-disable-next-line no-unused-vars
function parentAndChildScope() {
  const parentVariable = "I am in the parent's scope";
  childScope(parentVariable);
  console.log("Parent Scope, Parent Variable:", parentVariable);
  // eslint-disable-next-line no-undef
  console.log("Parent Scope, Child Variable:", childVariable);
  // ^--- this one would not run

  // to make childVariable run move or copy line 25 into global scope (line 29)
}
