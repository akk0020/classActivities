// bracket and dot notation
const key = "1";
const obj = {
  key: console.log("the key is 'key'"),
  1: "the key is 1"
};

// what will the following lines print?
console.log("thisismytest", obj[key]);
obj.key;
obj["key"];

// Create an object with at least four properties, each with a different data type.
// Name one of the four properties "collection" and set its value to an Array or Object.
let myObject = {
  name: "andrew",
  age: 39,
  isStudent: true,
  collection: {
    books: ["lotr", "hp", "mb"],
    movies: ["dune", "substance", "captain america"],
    tvshows: {
      walkingDead: "watched",
      breakingBad: "notWatched"
    }
  }
};
let xx = "breakingBad";
// Access a value in the "collection" property
console.log(myObject.collection.books[1]);
console.log(myObject.collection.tvshows[xx]);

// Practice with nested Arrays and Objects
const keys = ["key", "1", "method", "favorites", "list"];

// Add a method to an Object
obj.method = function() {
  return "the key is 'method' and it calls refers to a function";
};

// Fill in your favorite movie, number and color below
obj["favorites"] = {
  movie: "lotr",
  number: 2,
  color: "blue"
};

// Add a list (a.k.a array) to an Object
obj.list = ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }];

// Using the 'for...in' loop to iterate over 'obj' object ...
// how many lines will the following statement print?
// what do you expect to see on each line?
for (let key in keys) {
  console.log(`Key is: ${key} and value is: ${obj[key]}`);
}

// Use a template literal to print a sentence about your favorite things
console.log(`${obj.favorites.movie}`);

// Access the values "b", 4, and 6 from obj.list
console.log(obj.list[1]);
console.log(obj.list[4][1]);
console.log(obj.list[5].f);

// array = bracket notation
// object = bracket or dot notation
