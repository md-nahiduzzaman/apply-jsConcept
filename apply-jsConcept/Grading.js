// var number = 30;

// if (number >= 80) {
//   console.log("A+");
// } else if (number >= 70) {
//   console.log("A");
// } else if (number >= 60) {
//   console.log("A-");
// } else if (number >= 50) {
//   console.log("B");
// } else if (number >= 40) {
//   console.log("C");
// } else if (number >= 33) {
//   console.log("D");
// } else {
//   console.log("F");
// }

function myGrade(marks) {
  if (marks >= 0 && marks <= 32) {
    return "Fail";
  } else if (marks >= 33 && marks <= 39) {
    return "D";
  } else if (marks >= 40 && marks <= 49) {
    return "C";
  } else if (marks >= 50 && marks <= 59) {
    return "B";
  } else if (marks >= 60 && marks <= 69) {
    return "A-";
  } else if (marks >= 70 && marks <= 79) {
    return "A";
  } else if (marks >= 80 && marks <= 100) {
    return "A+";
  } else {
    return "unrecognized";
  }
}

var myMarks = myGrade(50);
console.log(myMarks);
