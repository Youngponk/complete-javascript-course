//* Functions


// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people an its capital city is ${capitalCity}`
// }

// const descFinland = describeCountry('Finland', 6, 'Helsinki');

// console.log(descFinland);

//* Function declarations vs Expressions

function percentageOfWolrd1(population) {
  return (population / 7900) * 100;
}

const mexicoPercentage = percentageOfWolrd1(131);
const indiaPercentage = percentageOfWolrd1(1463);
const brazilPercentage = percentageOfWolrd1(212);

console.log(mexicoPercentage, indiaPercentage, brazilPercentage);

const percentageOfWolrd2 = function (population) {
  return (population / 7900) * 100;
}

console.log(percentageOfWolrd2(131), percentageOfWolrd2(1463), percentageOfWolrd2(212));

//* Arrow Functions

percentageOfWolrd3 = (population) => (population / 7900) * 100;

console.log(percentageOfWolrd3(131), percentageOfWolrd3(1463), percentageOfWolrd3(212));

//* Function calling other functions

describePopulation = (country, population) => {


  const countryPercentage = percentageOfWolrd1(population);

  return `${country} has ${population} million people, which is about ${countryPercentage} of the world`
}

console.log(describePopulation('Chile', 19));

//* Array

const populations = [10, 24, 23, 20];


// My solution

// if (populations.length === 4) {  
//   console.log(true);
// } else {
//   console.log(false);
// }

// Better one

console.log(populations.length === 4);



percentages = [
  percentageOfWolrd1(populations[0]),
  percentageOfWolrd1(populations[1]),
  percentageOfWolrd1(populations[2]),
  percentageOfWolrd1(populations[3])
];

console.log(percentages);

//* Basic Array Operations (methods)

// 1

neighbouringCountries = ['Peru', 'Argentina', 'Bolivia'];
console.log(neighbouringCountries);

// 2

neighbouringCountries.push('Utopia');
console.log(neighbouringCountries);

// 3

neighbouringCountries.pop();
console.log(neighbouringCountries);

// 4

// My solution

// neighbouringCountries.includes('Germany') ? console.log('Germany is here!') : console.log('Probably not a central european country :D');

// Correction

if (!neighbouringCountries.includes('Germany')) {
  console.log('Probably not a central European country :D');
}

// 5

neighbouringCountries[neighbouringCountries.indexOf('Bolivia')] = 'Republic of Sweden';
console.log(neighbouringCountries);

//* Introduction to Objects

const myCountry = {
  country: 'Chile',
  capital: 'Santiago',
  language: 'spanish',
  population: 19,
  neighbours: ['Peru', 'Argentina', 'Bolivia'],

  describe: function () {
    console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
  },

  checkIsland: function () {
    // this.neighbours.length === 0 ? this.isIsland = true : this.isIsland = false; |  my solution

    // this.isIsland = this.neighbours.length === 0 ? true : false; | good solution


    // Even simpler version (see why this works...)
    /* 
      !Lógica principal
      this.neighbours.length > 0 -> true
      this.neighnours.length === 0 -> false

      Se usa el signo de negación porque la lógica nos dice que si el país no tiene vecinos (length > 0) debe de asignarse false
    */
    this.isIsland = !Boolean(this.neighbours.length);


  }
};

console.log(myCountry);

//* Dot vs. Bracket Notation

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);

//* Object Methods

// 1

myCountry.describe();

// 3

myCountry.checkIsland();
console.log(myCountry);

//* The for Loop



