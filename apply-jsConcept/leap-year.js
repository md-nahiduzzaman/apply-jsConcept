function leapYear(year) {
  if (year % 4 == 0) {
    return true;
  }
  return false;
}

var myYear = 2100;
var isThisYearLeapYear = leapYear(myYear);
console.log("is this year leap", isThisYearLeapYear);

// function checkLeapYear(year) {
//   if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//     return true;
//   }
//   return false;
// }

// var myYear = 2100;
// var isThisYearLeapYear = checkLeapYear(myYear);
// console.log("is this year leap year", isThisYearLeapYear);
