const fruitArray = [
  "apple",
  "banana",
  "cherry",
  ["grape", "orange"],
  "pear",
  ["strawberry", "blueberry"],
  "kiwi",
  "peach",
  "banana",
  "plum"
];

// change kiwi to KIWI //

let fruitKiwi = fruitArray[6];
console.log(fruitKiwi.toUpperCase());

//this is an if statement to flip array 5 if list includes cherry //

if (fruitArray.includes("cherry")) {
  fruitArray[5].reverse();
}

// how to splice array and add new fruits //

let fruitNo = fruitArray.splice(-4, 4, "watermelon", "pineapple");
console.log(fruitNo);
console.log(fruitArray);

// check if mango exists in array if not add to array
if (!fruitArray.includes("mango")) {
  fruitArray.unshift("mango");
}

// remove blueberry from nested array // 6 if including above if statement or 5 without it
fruitArray[6].pop();

console.log(fruitArray);

// slice and move the slice to end of array
let fruitA = fruitArray.slice(0, 2);
let cat = fruitArray.concat(fruitA);
console.log(cat);


