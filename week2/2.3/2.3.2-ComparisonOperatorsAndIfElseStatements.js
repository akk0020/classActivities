let age = 25;

if (age >= 25) {
  console.log("renting car affordable");
} else {
  console.log("renting car expensive");
}
// if age is greater than or equal to 25,
// console.log "Renting a car is more affordable."
// if age is less than 25
// console.log "Renting a car is very expensive."

// Chaining if statements: if - else if - ... - else

// if age is greater than or equal to 25,
// console.log "Renting a car is more affordable."
// if age is greater than or equal to 18
// console.log "Renting a car is very expensive."
// if age is less than 18
// console.log "You cannot legally rent a car."

if (age >= 25) {
  console.log("renting a car is more affordable");
} else if (age >= 18) {
  console.log("renting a car is very expensive");
} else {
  console.log("you cannot legally rent a car");
}
