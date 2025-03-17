// create an Array using an Array literal
let myArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// access the 1st item in the Array
console.log(myArray[0]);

// access the last item in the Array
console.log(myArray[9]);

// print the length of the Array
console.log(myArray.length);

// use the length property to access the last item in the Array
console.log(myArray[myArray.length - 1]);

// with for...of, loop over the Array, modify the value and add to a different Array
let = modifiedArray = [];
let index = 0;
for (let item of myArray) {
  modifiedArray[index] = item * 2
  index++
}
console.log(modifiedArray);
