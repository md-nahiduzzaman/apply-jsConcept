// Even Number

function isEven(number) {
  if (number % 2 == 0) {
    return true;
  }
  return false;
}

const myNumber = 1652;
const isMyNumberEven = isEven(myNumber);
console.log("is my number even", isMyNumberEven);

const herNumber = 1871;
const isHerNumberEven = isEven(herNumber);
console.log("is her number even", isHerNumberEven);

// Odd Number

function isOdd(number) {
  if (number % 2 != 0) {
    return true;
  }
  return false;
}

const isMyNumberOdd = isOdd(myNumber);
console.log("is my number odd", isMyNumberOdd);
