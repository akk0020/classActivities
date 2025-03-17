// Named Parameters
// write a function that takes two named parameters:
// print each named parameter

function functionWithTwoParams(height, weight) {
  console.log(height);
  console.log(weight);

  return height + weight;
}

// then return the parameters added together
// return height + weight;  // to make it run

// invoke the function and pass in two numbers
functionWithTwoParams(2, 3);
// print 2,3
// return 5

// invoke the function and pass in more than two numbers
functionWithTwoParams(5, 10, 15, 20);
// print 5, 10
// return 15

// invoke the function and pass in only one number
functionWithTwoParams(5);
// print 5 and undefined
// return 5 + undefined

// change the function to set default values for the parameters
// eslint-disable-next-line no-unused-vars
function functionWithTwoDefaultParams(height = 10, weight = 15) {
  console.log(height);
  console.log(weight);

  return height + weight;
}

// again, invoke the function and pass in only one number (NEW)
functionWithTwoParams(5);
// print 5 and 15
// return 20

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function functionWithRestParams(height = 10, weight = 15, ...myRestParam) {
  console.log(height);
  console.log(weight);
  console.log(myRestParam);

  return height + weight;
}
// again, invoke the function and pass in more than two numbers
functionWithRestParams(1, 2, 3, 4, 5, 6, 7, 8);
