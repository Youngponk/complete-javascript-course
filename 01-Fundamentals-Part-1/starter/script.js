// * Values and Variables

/*
!aa

console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Matilda';

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = 'Coder'
let myCurrentJob = 'Teacher'

console.log(myFirstJob);

// * Data Types

// Number Floating point numbers

let age = 23;

// String Sequence of characters

let name = 'Jonas';

//Bolean Using for taking decisions

let isOpen = true;

// Undefined 'empty value'

let children;

// Null Also means 'empty value'

null

// Symbol Value that is unique and cannot be changed

// BigInt Larger integers than the Number type can hold

/*

!Javascript has dynamic typing: we dont have to manually define thje data type of the value stored in a variable. Instead, data types are  determinated automatically.

*/

/*
!a

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof (true));
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';

console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof (year));

year = 2000;
console.log(typeof (year));

console.log(typeof (null));

!
*/
// * let, const and var

/*

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 2000;

var job = 'programmer';
job = 'teacher';

lastName = 'Chávez'
console.log(lastName);

*/

// * Basic Operator

/*
const currentYear = 2025;
const ageJonas = currentYear - 2000;
const ageSarah = currentYear - 2005;

console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);
// ! 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

let x = 10 + 5; // 15
x += 10; // x = x + 10 -> 25
x *= 4; // x = x * 4 -> 100
x++; // x = x + 1 -> 101
x--; // x = x - 1 -> 100

console.log(x);

//* Comparison operators

console.log(ageJonas > ageSarah); // > , <, >=, <=, ===

console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;


console.log(currentYear - 2000 > currentYear - 2005);*/


//* Operator precedence

/*

console.log(currentYear - 2000 > currentYear - 2005);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; //  x = y  = 10

console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

*/

// * Strings and template literals

/*
const firstName = 'Jonas';
const job = 'teacher'
const birthYear = 1991;
const jonas = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' years old ' + job + '!';

console.log(jonas);

const jonasNew = `I'm ${firstName} a ${currentYear - birthYear} years old ${job}!`;

console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String whit \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);
*/

// * If statements

/*

const age = 12;

if (age >= 18) {
  console.log('Sarah can start driving license');
} else {
  const yearLeft = 18 - age;
  console.log(`Sara is too young. Wait another ${yearLeft} years :)`);
}

const birthYear = 1998;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

*/

// * Type coercion

/*
const inputYear = '1991';

//! Number and String coercion
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number('Jonas'));
console.log(typeof NaN);
console.log(String(23), 23);

//! Type coercion

console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);

console.log('23' * '2');

let n = '1' + 1;

n = n - 1;
console.log(n);

*/

// * Thruty and Falsy values

/*

//! 5 Falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));


const money = 0;

if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

// false porque money es 0 y es un falsy


let height;

if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}

// false porque height es undefined y es un falsy

*/

// * Equality operators: == & ===

/*
const age = '18';

if (age === 18) console.log('You just became an adult :D');

if (age == 18) console.log('You just became an adult :D (loose)');


const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof (favourite));

if (favourite === 23) {
  console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
  console.log('7 is also a cool number');
} else if (favourite === 9) {
  console.log('9 is also a cool number');
} else {
  console.log('Number isnt 23, 9 or 7');
}

if (favourite !== 23) console.log('Why not 23?');

*/

// * Boolean logic

/*

//! AND OR & NOT

const hasDriverLicense = true; // A
const hasGoodVision = true; // B


console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);


// if (hasDriverLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C

console.log(hasDriverLicense && hasGoodVision && !isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}

*/

//* Switch

/*

const day = 'friday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'thuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
    break;
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
    break;
  case 'sunday':
    console.log('Enjoy the weekend :D');
  default:
    console.log('Not a valid day!');

}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'thuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday') {

} else if (day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday') {

} else if (day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}

*/

//* Statements and expressions

/*

3 + 4
1991
true && false && !false

if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2025 - 2000} years old ${me}`);

*/

//* Conditional ternary

/*

const age = 23;
age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

const drink = age >= 18 ? 'Wine 🍷' : 'Water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'Wine 🍷';
} else {
  drink2 = 'Water 💧';
}

console.log(drink2);

console.log(`I link to drink ${age >= 18 ? 'Wine 🍷' : 'Water 💧'}`);

*/

