const number = [10, 20, 30, 10, 20];
function removeDuplicate(number) {
  const unique = [];
  for (const element of number) {
    if (unique.indexOf(element) == -1) {
      unique.push(element);
    }
  }
  return unique;
}

const uniqueNumber = removeDuplicate(number);
console.log(uniqueNumber);
