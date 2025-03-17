// add an event listener to the dog picture that listens for a "click" and gives an alert
let dogPic = document.querySelector("#dog-picture");

dogPic.addEventListener("click", () => alert("pic was clicked"));

// add an event listener to the list items in the class schedule that listens for a "mouseover" event and changes its background color
let classSchedule = document.querySelector("#class-schedule-list");

classSchedule.addEventListener(
  "mouseover",
  event => (event.target.style.backgroundColor = "red")
);

// add an event listener to the whole page that listens for a "keydown" event and prints the key that was pressed
document
  .querySelector("body")
  .addEventListener("keypress", event =>
    console.log(`the ${event.key} was pressed`)
  );
