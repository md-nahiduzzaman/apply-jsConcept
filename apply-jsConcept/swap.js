var firstNumber = 10;
var secondNumber = 20;
console.log(firstNumber, secondNumber);

//first approach
var tempNumber = firstNumber;
firstNumber = secondNumber;
secondNumber = tempNumber;
console.log(firstNumber, secondNumber);

//Destructruing
[firstNumber, secondNumber] = [secondNumber, firstNumber];
console.log(firstNumber, secondNumber);
