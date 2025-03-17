// "regular" functions
function greet(name) {
  return `Hello ${name}!`;
}
// greet("andy");

function welcome(name) {
  return `${name}, welcome!`;
}
// welcome("andrew");

function informAboutSale(name) {
  return `${name}, we're having a sale!`;
}
// informAboutSale("andy");

// function that takes a callback function as an argument
function getNameAndShowMessage(callback) {
  const name = prompt("Please Enter Your Name: ");
  alert(callback(name));
}

getNameAndShowMessage(greet);

// pass each "regular" function into getAndShowMessage as a callback function
getNameAndShowMessage(greet);
getNameAndShowMessage(welcome);
getNameAndShowMessage(informAboutSale);
