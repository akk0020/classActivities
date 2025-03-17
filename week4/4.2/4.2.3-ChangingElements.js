// print the outer HTML of the navigation bar
console.log("4.2.3", document.querySelector("nav").outerHTML);

// print the inner HTML of the navigation bar
console.log("4.2.3", document.querySelector("nav").innerHTML);

// print the text content of the #class-schedule-list element
console.log(
  "4.2.3",
  document.querySelector("#class-schedule-list").textContent
);
// select the classList for the first class-week, then add the class "week-1"
let classWeek = document.querySelector(".class-week");
classWeek.classList.add("week-1");

// select the img element and add a src attribute
document.querySelector("img").src =
  "https://i2.pickpik.com/photos/774/556/1024/odin-male-australian-shepherd-dog-thumb.jpg";

// change the font color of the h1 element
document.querySelector("h1").style.color = "red";

// could of done this for same "Nav" #1 and #2
// let navBar = document.querySelector("nav");
// console.log(navBar.outerHTML);
// console.log(navBar.innerHTML);
