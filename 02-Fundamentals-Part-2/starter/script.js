'use strict';
/*

// When using strict mode the variables have to be exactly as when we declarated them

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('i can drive :D');

// const interface = 'Audio';
// const private = 534;

*/

//* Functions

function logger() {
  console.log('My name is Jonas');
}

// Calling / Running / Invoking function
logger();
logger();


// function fruitProcessor(apples, oranges) {
//   const juice = `Juice whit ${apples} apples and ${oranges} oranges`;

//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// const appleOrangeJuice = fruitProcessor(2, 4);

// console.log(appleJuice);
// console.log(appleOrangeJuice);


//* Function declarations vs expressions

//! Function declaration

function calcAge1(birthYear) {
  return 2025 - birthYear;
}

const age1 = calcAge1(2000);

//! Function expression

const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
}

const age2 = calcAge2(2000);

//! Arrow Function

const calcAge3 = birthYear => 2025 - birthYear;

const age3 = calcAge3(2000);

console.log(age1, age2, age3);


// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = 2025 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;

//   return `${firstName} retires in ${retirement} years`
// }

// console.log(yearUntilRetirement(2000, 'Erwin'));
// console.log(yearUntilRetirement(2001, 'Nicolas'));


//* Function into another function

function cutFruitPieces(fruit) {
  return fruit * 4;
}


function fruitProcessor(apples, oranges) {

  const applePieces = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges);
  const juice = `Juice whit ${applePieces} pieces of apple and ${orangesPieces} pieces of orange`;

  return juice;
}

console.log(fruitProcessor(2, 3));

//* Reviewing function

const calcAge = function (birthYear) {
  return 2025 - birthYear;
}


const yearUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }

  return retirement;

}


console.log(yearUntilRetirement(2000, 'Erwin'));
console.log(yearUntilRetirement(1920, 'Nicolas'));

