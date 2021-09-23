const instructorWithLongestName = function (instructors) {
  // init container for instructor object
  let longestName = instructors[0];
  // compare name length of instructors with container; if longer, replace container
  for (i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > longestName.name.length) {
      longestName = instructors[i]
    }
  };
  return longestName
}



console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));



//45 of 60 minutes