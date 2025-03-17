// create a new unordered list (ul) element
const unorderedList = document.createElement("uL");

// remove the paragraph element in the nav-bar
let removeChild = document.querySelector(".nav-bar > p");
removeChild.remove();

// add your new ul element to the nav-bar
document.querySelector(".nav-bar").appendChild(unorderedList);
// create two new list item (li) elements, and add some text to them
let newLiOne = document.createElement("li");
let newLiTwo = document.createElement("li");

newLiOne.textContent = "1st new list item";
newLiTwo.textContent = "2nd new";

// add the li elements to the ul in the nav-bar
document.querySelector(".nav-bar > ul").appendChild(newLiOne);
document.querySelector(".nav-bar > ul").appendChild(newLiTwo);
