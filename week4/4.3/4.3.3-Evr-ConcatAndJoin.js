const arrOne = ["a", [0], "b"];
const arrTwo = [1, 2, "c", ["d", 3]];

// concatenate arrTwo, 4, and "e" to arrOne and save the resulting array to a variable
const mergeArray = arrOne.concat(arrTwo, 4, "e");

// print the new, merged array
console.log(mergeArray);

// join the merged array and print the result
let joinedArray = mergeArray.join(" ");
console.log(joinedArray);
