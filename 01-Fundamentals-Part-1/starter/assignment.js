// * Variables

let country = 'Chile';
let continent = 'America';
let population = 19660000;

console.log(country);
console.log(continent);
console.log(population);

// * Data Types

let isIsland = false;
let language;

console.log(typeof (isIsland));
console.log(typeof (population));
console.log(typeof (country));
console.log(typeof (language));

// * let, const and var

language = 'Spanish';
// const isIsland = false;
// const continent = 'America';
// const language = 'Spanish';

// * Basic Operators

console.log(population / 2);

population++;
console.log(population);

console.log(population > 6000000);

console.log(population > 33000000);

const description = country + ' is in ' + continent + ', and its ' + population + ' people and speak ' + language;

console.log(description);

// * Strings and Template Literals

const descriptionLiterals = `${country} is in ${continent} and its ${population} people and speak ${language}`;
console.log(descriptionLiterals);

//* Taking Decisions: if / else statements

if (population > 33000000) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(`${country} population is ${33000000 - population} million below average`);
}

//* Type conversion and coercion

console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143


//* Equality operators: == vs ===

// const numNeighbours = Number(prompt('How many neighbour countries does your contry have?'));

// if (numNeighbours === 1) {
//   console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//   console.log(`You have ${numNeighbours} borders`);
// } else {
//   console.log('No borders');
// }

//* Logical Operator

countryLanguage = 'English';
countryPopulation = 40;
countryIsIsland = false;

if (countryLanguage === 'English' && countryPopulation < 50 && !countryIsIsland) {
  console.log('You should live in Portugal :)');
} else {
  console.log('Portugal does not meet your criteria :(');
}

//* The switch Statement

const languageOption = 'spanish';

switch (languageOption) {
  case 'chinese':
  case 'mandarin':
    console.log('MOST number of native speakers!');
    break;
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'english':
    console.log('3rd place');
    break;
  case 'hindi':
    console.log('Number 4');
    break;
  case 'arabic':
    console.log('5th most spoken langauge');
    break;
  default:
    console.log('Great language too :D');
}

//* The coditional (Ternary) Operator

countryPopulation > 33 ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`);

console.log(
  `${country}'s population is ${population > 33 ? 'above' : 'below'} average`
);
