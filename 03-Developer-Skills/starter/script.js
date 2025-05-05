// // Remember, we're gonna use strict mode in all scripts now!

/*

// 'use strict';

// const x = '23';

// if (x === 23) console.log(23);

// const calcAge = birthYear => 2037 - birthYear;

// PROBLEM:

//We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem

// What's temperature amplitud ? -> difference between highest and lowerst temp

// How to compute the max and min temperatures

//Sensor error -> what we do

// 2) Breaking up into sub-problems

// How to ignore errors?
// Find max and min value in the array
// Substract min from max (Amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;
    
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  
  return `
  Max temp: ${max}
  Min temp: ${min}
  Amplitude: ${max - min}`;
};

console.log(calcTempAmplitude(temperatures));

// PROBLEM 2: Function should now receive 2 arrays of temps

// 1) Understanding the problem

// Merge the 2 arrays

// 2)

// How to merge 2 arrays?

const calcTempAmplitude2 = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];
  
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;
    
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  
  return `
  Max temp: ${max}
  Min temp: ${min}
  Amplitude: ${max - min}`;
};

console.log(calcTempAmplitude2(temperatures, [1, -3, -10, 5, 5, -5]));


const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    
    // FIX
    
    value: Number(prompt('Degree celsius: ')),
  };
  
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.warn('warn');
console.error('error');

console.log(measureKelvin());


const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//* Using a debugger

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  
  // Bug -> inicializar max y min en 0
  // debugger;-> funciona como breakpoint
  let max = 0;
  let min = 0;
  
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;
    
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  
  return `
  Max temp: ${max}
  Min temp: ${min}
  Amplitude: ${max - min}`;
};

console.log(calcTempAmplitudeBug(temperatures, [1, -3, -10, 5, 5, -5]));

*/

//////////////////////////////!
//! Codding Challenge 1

/*

Given an array of forecasted maxium temperatures, 
the termometer display a string whit these temperatures


Example: [17, 21, 23] willl print "... 17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days"

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA: [17, 21, 23]
TEST DATA: [12, 5, -5, 0 ,4]

*Solution 

1) Understanding the problem

? Create a function called 'printForecast'
? Return a string whit the diferent max temp for the next days

2) Break it up into small task

? 1 Loop the array
? 2 cocadenate the information  -> value and position of array
? return the max temps for the next days


//! Coding Challenge #2 With AI

Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]

*/

function analyzeWorkWeek(dailyHours) {
  if (dailyHours.length !== 7) {
    throw new Error(
      'The input array must contain exactly 7 days of work hours.'
    );
  }

  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);
  const averageHours = +(totalHours / dailyHours.length).toFixed(1);
  const maxHours = Math.max(...dailyHours);
  const dayWithMostHours = daysOfWeek[dailyHours.indexOf(maxHours)];
  const daysWorked = dailyHours.filter(hours => hours > 0).length;
  const isFullTime = totalHours >= 35;

  return {
    totalHours,
    averageHours,
    dayWithMostHours,
    daysWorked,
    isFullTime,
  };
}

// Test data
const workWeek = [7.5, 8, 6.5, 0, 8.5, 4, 0];
console.log(analyzeWorkWeek(workWeek));

const workWeek2 = [7.5, 8, 6.5, 0, 8.5];
console.log(analyzeWorkWeek(workWeek2));
