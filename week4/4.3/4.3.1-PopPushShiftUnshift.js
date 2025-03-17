const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let lastItem = nums.pop();
let lastItemTwo = nums.pop();
nums.pop();
console.log(lastItem);
console.log(nums);

// remove each of the first two items with shift(), saving each item to a variable
let firstItem = nums.shift();
let firstItemTwo = nums.shift();
console.log(firstItem);
console.log(firstItemTwo);

// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.push(lastItem, lastItemTwo);
nums.unshift(firstItem, firstItemTwo);
console.log(nums);
