const number = [10, 20, 30, 40, 50, 10, 30, 50];
function removeDuplicate(number) {
  const unique = [];
  for (const element of number) {
    //console.log(element);
    if (unique.indexOf(element) == -1) {
      unique.push(element);
    }
  }
  return unique;
}

const uniqueNumber = removeDuplicate(number);
console.log(uniqueNumber);
