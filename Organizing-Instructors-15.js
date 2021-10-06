/* Create a function named organizeInstructors that will 
receive an array of instructor objects, and 
will return a new object that has the following format:


{
  CourseName: [instructors]
}  */

// Good Luck



const organizeInstructors = function (instructors) {

  const o = new Object;
  let curriculum = [];

  instructors.forEach(instructor => {

    if (curriculum.indexOf(instructor.course) > -1) {  // course key already in o; push(instructor.name) to course value
      o[instructor.course].push(instructor.name);

    } else {
      o[instructor.course] = [instructor.name];  // adds a new key: value pair to o 
      curriculum.push(instructor.course);
    }
  });
  return o
};

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));

/* {
  iOS: ["Samuel"],
  Web: ["Victoria", "Karim", "Donald"]
} */


console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));

/* {
  Blockchain: ["Brendan"],
  Web: ["David", "Carlos"],
  iOS: ["Martha"]
} */

// 2hrs




