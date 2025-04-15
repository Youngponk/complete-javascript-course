'use strict';
/*

// When using strict mode the variables have to be exactly as when we declarated them

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('i can drive :D');

// const interface = 'Audio';
// const private = 534;



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


 const yearUntilRetirement = (birthYear, firstName) => {
   const age = 2025 - birthYear;
   const retirement = 65 - age;
   // return retirement;

   return `${firstName} retires in ${retirement} years`
 }

 console.log(yearUntilRetirement(2000, 'Erwin'));
 console.log(yearUntilRetirement(2001, 'Nicolas'));


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

//* Arrays

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Pete';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);


// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];

console.log(jonas);

// Exercise

const calcAge = function (birthYear) {
  return 2037 - birthYear
}

const years = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge(years[0]));
console.log(calcAge(years[1]));
console.log(calcAge(years[years.length - 1]));


const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]

console.log(ages);


//! Array methods


//! Addinng elements

// Last
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

//First element
friends.unshift('John');
console.log(friends);


//! Removing elements

// Last element
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

// First element
friends.shift();
console.log(friends);

// Searching index by the element value (return pos or -1 if didnt exist)

console.log(friends.indexOf('Steven')); // 1
console.log(friends.indexOf('Bob')); // -1

// Looking for a element in the array (return boolean)

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));


if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}




//* Objects

const jonasArray = [
  'Jonas',
  'Schemtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);

//! Dot notation

console.log(jonas.lastName);

//! Bracket notation

console.log(jonas['lastName']);

//! The difference

const nameKey = 'Name';

console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey);  Dont work

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job or friends');


if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job or friends');
}

//! Adding a property to an object

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// TODO -> Challenge "Jonas has 3 friends, and his best friend is called Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);


//! Objects method


const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear
  // }


  // calcAge: function () {
  //   return 2037 - this.birthYear
  // }


  calcAge: function () {
    this.age = 2037 - this.birthYear
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
  }

};

// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// TODO > Challenge "Jonas is a 46-year old, and he has a/no driver's license"

console.log(jonas.getSummary());

//* Iteration: the for loop

// console.log('Lifting weights repetition 1 🏋🏽‍♀️');
// console.log('Lifting weights repetition 2 🏋🏽‍♀️');
// console.log('Lifting weights repetition 3 🏋🏽‍♀️');
// console.log('Lifting weights repetition 4 🏋🏽‍♀️');
// console.log('Lifting weights repetition 5 🏋🏽‍♀️');
// console.log('Lifting weights repetition 6 🏋🏽‍♀️');
// console.log('Lifting weights repetition 7 🏋🏽‍♀️');
// console.log('Lifting weights repetition 8 🏋🏽‍♀️');
// console.log('Lifting weights repetition 9 🏋🏽‍♀️');
// console.log('Lifting weights repetition 10 🏋🏽‍♀️');


// for loop keeps runnig while conditions is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋🏽‍♀️`);
}



//* Looping arrays, breaking and continue

const jonasArray = [
  'Jonas',
  'Schemtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);

  // Filling type arrays
  // types[i] = typeof jonas[i];

  types.push(typeof jonasArray[i]);
}

console.log(types);


const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2025 - years[i]);
}

console.log(ages);


//! continue and break

console.log('------ ONLY STRINGS ------');
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== 'string') {
    continue;
  }
  console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log('------ BREAK WHIT NUMBER ------');
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === 'number') {
    break;
  }
  console.log(jonasArray[i], typeof jonasArray[i]);
}



//* Looping backwards and loops in loops


const jonasArray = [
  'Jonas',
  'Schemtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];

for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(i, jonasArray[i]);
}

// for inside a for

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------------Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋🏽‍♂️`);
  }
}


*/

//* While loop


