function findLargestNumber(first, second, third) {
  if (first > second && first > third) {
    return first;
  } else if (second > third && second > first) {
    return second;
  } else {
    return third;
  }
}

function findSmallestNumber(first, second, third) {
  if (first < second && first < third) {
    return first;
  } else if (second < third && second < first) {
    return second;
  } else {
    return third;
  }
}

const largeNumber = findLargestNumber(10, 20, 30);
const smallNumber = findSmallestNumber(10, 20, 30);
console.log("Large Number is", largeNumber);
console.log("Small Number is", smallNumber);
