function largestElement(number) {
  let largest = number[0];
  for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}

function lowestElement(number) {
  let lowest = number[0];
  for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if (element < lowest) {
      lowest = element;
    }
  }
  return lowest;
}

const age = [100, 200, 300, 90, 80, 700];
const oldestAge = largestElement(age);
const lowestAge = lowestElement(age);
console.log(oldestAge);
console.log(lowestAge);
