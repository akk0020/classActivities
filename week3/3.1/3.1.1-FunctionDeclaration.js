// TODO: using the function expressions below, refactor them into function declarations

// func expression
const greet = function() {
  console.log("Hello!");
};

// func declaration
function greetDecl() {
  console.log("Hello!");
}

// func expression
const threeModTwo = function() {
  console.log(3 % 2);
};

// func declaration
function threeModTwoDecl() {
  console.log(3 % 2);
}

let age = 18;

// func expression
const checkDrivingAge = function() {
  if (age >= 16) {
    console.log(true);
  } else {
    console.log(false);
  }
};

// func declaration
function checkDrivingAgeDecl() {
  if (age >= 16) {
    console.log(true);
  } else {
    console.log(false);
  }
}

checkDrivingAgeDecl();
