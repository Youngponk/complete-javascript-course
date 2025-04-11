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

