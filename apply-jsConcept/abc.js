//String
var name = "Yahya";

//Numeric
var age = 2;

//Boolean
var male = true;

//Mathematical Operation
var onionPrice = 30;
var onionQuantity = 5;
var eggPrice = 50;
var eggQuantity = 5;

var totalPrice = onionPrice + eggPrice;
var priceDiffernce = onionPrice - eggPrice;
var eggPriceMultiplication = eggPrice * eggQuantity;
var onionPricePerKg = onionPrice / onionQuantity;

console.log(totalPrice);
console.log(priceDiffernce);
console.log(eggPriceMultiplication);
console.log(onionPricePerKg);

//Advance Mathematical Shorthand
var price1 = 10;
var price2 = 20;
var age1 = 15;
var age2 = 20;
//price1 = price1 + 20
price1 += 20;
//price2 = price2 -10
price2 -= 10;
//age1 = age1 + 1
age1++;
//age2 =age2 - 1
age2--;

console.log(price1);
console.log(price2);
console.log(age1);
console.log(age2);

//Advance Integer Float Parselnt parseFloat
var firstName = "Muhammad";
var lastName = "Yahya";
var fullName = firstName + " " + lastName;
console.log(fullName);

var mobilePrice = 40;
var chargerPrice = 100;
totalMobilePrice = mobilePrice + chargerPrice;
console.log(totalMobilePrice);

//Integer
var sunglassPrice = 3;

//Float
var watchPrice = 4.5;

//parseInt()
var eggPrice1 = "50.23";
var eggPrice2 = "80.56";
var eggPrice1Number = parseInt(eggPrice1);
var eggPrice2Number = parseFloat(eggPrice2);

console.log(eggPrice1Number);
console.log(eggPrice2Number);

//Special edition
var firstNumber = 0.1;
var secoundNumber = 0.2;
var total = firstNumber + secoundNumber;
console.log(total.toFixed(1));

//Array

var vowels = ["a", "e", "i", "o", "u"];

var vowelsCount = vowels.length;
var eIndex = vowels.indexOf("e");
var indexPosition = vowels["o"];

//add elemet to an arrry
vowels.push("w");
vowels.push("x");

//remove an element from an arry
vowels.pop();

//remove item from begening
vowels.shift();

//add item at begening
vowels.unshift();
