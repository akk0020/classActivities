const studentData = {
  school: "Savvy Coders",
  location: {
    city: "St. Louis",
    state: "MO",
    zip: "63010"
  },
  students: [
    {
      id: 101,
      name: "Alice",
      age: 21,
      scores: [95, 87, 91],
      hobbies: ["reading", "chess", "coding"],
      contact: {
        email: "alice@email.com",
        phone: "555-1234"
      }
    },
    {
      id: 102,
      name: "Bob",
      age: 23,
      scores: [88, 90, 77],
      hobbies: ["gaming", "basketball", "cooking"],
      contact: {
        email: "bob@email.com",
        phone: "555-5678"
      }
    }
  ],
  courses: {
    javascript: {
      instructor: "Mr. Smith",
      duration: "12 weeks",
      topics: ["Variables", "Functions", "Objects", "DOM Manipulation"]
    },
    python: {
      instructor: "Ms. Johnson",
      duration: "10 weeks",
      topics: ["Loops", "Dictionaries", "OOP", "APIs"]
    }
  },
  getStudentCount: function() {
    return this.students.length;
  }
};

// studentData.location.country = "USA";
// studentData.courses.javascript.topics[4] = "Arrays";
// studentData.students[2] = {
//   id: 103,
//   name: "asda",
//   age: 23,
//   scores: [88, 90, 77],
//   hobbies: ["gaming", "basketball", "cooking"],
//   contact: {
//     email: "bob@email.com",
//     phone: "555-5678"
//   }
// };
// studentData.greet = function() {
//   return "hello!";
// };

// console.log(studentData.school);
// console.log(studentData.location.city);
// console.log(studentData.students[0].name);
// console.log(studentData["location"]["zip"]);
// console.log(studentData.students[1].contact.email);
// console.log(studentData["courses"]["python"]["instructor"]);
// console.log(studentData.courses.javascript.topics.length);
// console.log(studentData.getStudentCount());
// console.log(studentData.courses.javascript.topics);
// console.log(studentData);
// console.log(studentData.greet());

// for of loop, to go throuh list of students

// for (let student of studentData.students) {
//   console.log(student.name);
// }

// list course names for in loop
// for (let course in studentData.courses) {
//   console.log(course);
// }

// for in over object and object keys
// for of over arrays

// greet user name !! (REST PARAMETER)
function greet(name, ...messages) {
  console.log(`hello ${name}`);
  console.log("messages", messages);
}
greet("andrew", "hello", "hihi", "helllllllo");

// arrow syntax !!!
// const greet = name => `hello ${name}`;
// console.log(greet("andrew"));
