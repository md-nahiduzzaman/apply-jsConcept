function inchToFeet(inches) {
    var feet = inches/12;
    return feet;
}

var nahidInch = 144;
var feet = inchToFeet(nahidInch);
console.log('Nahid inches is', feet);

var tahmiInch = 132;
var feet = inchToFeet(tahmiInch);
console.log('Tahmi inches is', feet);

var yahyaInch = 48;
var feet = inchToFeet(yahyaInch);
console.log('Yahya inches is', feet);


//

function mileToKm(mile) {
    var km = mile * 1.60934;
    return km;
}

var marathon = mileToKm(26.2);
console.log('Marathon in km:', marathon);


