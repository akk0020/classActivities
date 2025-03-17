const animals = [
  "lion",
  "tiger",
  "elephant",
  "zebra",
  "giraffe",
  "rhino",
  "panda",
  "kangaroo",
  "cheetah",
  "wolf",
  "fox",
  "bear",
  "crocodile",
  "penguin",
  "shark",
  "dolphin",
  "octopus",
  "parrot",
  "eagle",
  "owl",
  "snake",
  "frog",
  "turtle"
];

//  add hippo chimp to end add panther bobcat to start
animals.push("hippo", "chimp");
//  to return value of new array, gotta create "newNumber" then call it in.
let newNumber = animals.unshift("panther", "bobcat");
console.log(animals);
console.log(newNumber);

//remove three animals from end and store them
// console.log(animals.splice(-3, animals.length));
// or this way
// let x = [animals.pop(), animals.pop(), animals.pop()];
// console.log(x);

// find first occurrence of tiger

let firstA = animals.indexOf("tiger");
console.log(firstA);

// extract last 5 without modifying array
let extract = animals.slice(-5);
console.log(extract);

//remove last and add front
let removeLast = animals.pop();
animals.unshift(removeLast);
console.log(removeLast);
console.log(animals);

//create reverse copy of array without modifying (method chaining)

let sliceAnimals = animals.slice().reverse();
console.log(sliceAnimals);

// extract all animals between giraffe and penguin

let g = animals.indexOf("giraffe") + 1;
let h = animals.indexOf("penguin");
console.log(g, h);
let r = animals.slice(g, h);
console.log(r);

// replace fox with mongoose
let fox = animals.indexOf("fox");
console.log(fox);
let foxMon = animals.splice(fox, 1, "mongoose");

console.log(animals);

//swap first three with last three animals
let firstThree = animals.splice(0, 3);
let lastThree = animals.splice(-3, 3);
animals.push("butterfly");

console.log(firstThree);
console.log(lastThree);

let swap = lastThree.concat(animals, firstThree);

console.log(swap);

//remove animals that contain letter e // mixing alot of stuff together

for (let i = animals.length - 1; i >= 0; i--) {
  if (animals[i].includes("e")) {
    console.log(animals[i]);
    animals.splice(i, 1);
  }
}
console.log(animals);

// last animal from array and split animal (string) and add back to array

let lastAnimal = animals.pop();
let letters = lastAnimal.split("");
console.log(letters);
let newAnimals = animals.concat(letters);
console.log(newAnimals);
