function getFactorial(number) {
  let factorial = 1;
  let i = 1;
  while (i <= number) {
    factorial = factorial * i;
    i++;
  }
  return factorial;
}

var myFactorial = getFactorial(7);
console.log("my factorial is", myFactorial);
