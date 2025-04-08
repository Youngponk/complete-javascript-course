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


function fruitProcessor(apples, oranges) {
  const juice = `Juice whit ${apples} apples and ${oranges} oranges`;

  return juice;
}

const appleJuice = fruitProcessor(5, 0);
const appleOrangeJuice = fruitProcessor(2, 4);

console.log(appleJuice);
console.log(appleOrangeJuice);
