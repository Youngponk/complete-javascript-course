'use strict';

/*
const bookings = [];

const createBooking = function (
  flighNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //? old way to set default parameters ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  
  //? ES6 -> in parameters
  
  const booking = {
    flighNum,
    numPassengers,
    price,
  };
  bookings.push(booking);
  console.log(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000); //Skip a default parameter


const flight = 'LH234';
const erwin = {
  name: 'Erwin Chavez',
  passport: 123512315,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  
  if (passenger.passport === 123512315) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
}
};

// checkIn(flight, erwin);
// console.log(flight);
// console.log(erwin);

// Is thje same as doing...

const flighNum = flight;
const passenger = erwin;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(erwin);
checkIn(flight, erwin);


//* Callback Function

const oneWord = function (str) {
  // return str.replace(/ /g, '').toLowerCase();
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// High-order function -> Función de nivel alto

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time

const high5 = function () {
  console.log('👋🏽');
};

//! Event handler (high5) or callback
document.body.addEventListener('click', high5);

//! another callback
['Jonas', 'Erwin', 'Claudia'].forEach(high5);

//////////////////////////!
//!  Example



// Paso 1: Crea una función que reciba tres parámetros:
// - un arreglo de personas,
// - una función que actúe como filtro (callback),
// - una función para procesar los resultados (callback).
function procesarPersonas(lista, filtroCallback, resultadoCallback) {
  // Tu código aquí
}

// Paso 2: Crea una función para filtrar mayores de edad.
function esMayorDeEdad(persona) {
  // Tu código aquí
}

// Paso 3: Crea una función para mostrar los nombres por consola.
function mostrarNombres(personasFiltradas) {
  // Tu código aquí
}

// Paso 4: Llama a `procesarPersonas` con las funciones anteriores como argumentos.


const personas = [
  { nombre: 'Ana', edad: 25 },
  { nombre: 'Luis', edad: 17 },
  { nombre: 'Carlos', edad: 30 },
  { nombre: 'María', edad: 15 },
];

//? High-order function (main function)

const procesarPersonas = function (personas, fn, mostrarNombres) {
  const personasFiltradas = personas.filter(fn);
  mostrarNombres(personasFiltradas);
};

//? Callbacks

const esMayorDeEdad = function (personas) {
  return personas.edad >= 18;
};

const mostrarNombres = function (personasFiltradas) {
  console.log('Personas mayores de edad:');
  personasFiltradas.forEach(persona => {
    console.log(persona.nombre);
  });
};

procesarPersonas(personas, esMayorDeEdad, mostrarNombres);


//* Function returning functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');

greeterHey('Erwin');
greeterHey('Jonas');

greet('Hello')('Erwin');

//! Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Erwin');

//* Call and apply method

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {},
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Erwin Chávez');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// Reusing a function from other object
const book = lufthansa.book;

//! Dont work
// book(23, 'Sarah Williams');

//? Call method
//? Llama la función con (objeto, inputs)
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

//? Apply method
//? Usa el metodo en cuestion entregando (el objeto, inputs) como inputs

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

//? Bind method
//? Almacenar el metodo de un objeto en una variable usando otro objeto
//? Mantiene el uso de 'this' en el metodo.

// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

//? en esta funcion solo tendrá que entregarse el nombre
//? En caso de mantener la funcion con el vuelo 23
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Erwin Chávez');
bookEW23('Martha Cooper');

//! With Event Listeners !

lufthansa.planes = 300; //? Setteando los planes que tiene lufthansa
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this);
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

// const addTax = (rate, value) => value + value * rate;

// console.log(addTax(0.1, 200));

//? Value at tax
// const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + values * 0.23;

// console.log(addVAT(200));

//! Refactoring addVAT whit function returning another function

//* Example

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');

greeterHey('Erwin');
greeterHey('Jonas');

greet('Hello')('Erwin');



const addTaxRate = function (rate) {
  return function (value) {
    console.log(value + value * rate);
  };
};
addTaxRate(0.1)(100);

const addVAT2 = addTaxRate(0.23);
addVAT2(100);
*/

// ! Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    
    if (answer !== 'NaN' && answer >= 0 && answer <= this.answers.length - 1) {
      //? Adding vote (Answers arrays)
      
      this.answers[answer]++;
    } else {
      alert('Wrong ❌, match your answer whit the options');
  }
  
  this.displayResults('string');
  this.displayResults('array');
},
displayResults(type = 'array') {
  if (type === 'string') {
    console.log(`Poll results are: ${this.answers.join(', ')}`);
  } else if (type === 'array') {
    console.log(this.answers);
  } else {
    console.log('Error ❌, Choose string or array');
}
},
};

document
.querySelector('.poll')
.addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6] });


//* Inmediately invoked function expressions (IIFE)
//? Funcion que se ejecuta una sola vez y se elimina

const runOnce = function () {
  console.log('This will never run again');
};

runOnce();

//? Se escribe la funcion -> se rodea de parentesis -> se llama
//? IIFE
(function () {
  console.log('This will never run again');
})();

//? Arrow function

(() => console.log('This will ALSO never run again'))();

//* Closures
//? No es algo que usemos, pasa automaticamente
//? Es el procedimiento que ocurre cuando dentro de una función existe otra, la segunda función puede "recordar" las variables de la primera funcion
//? Gracias a la closure la segunda función no pierde la "conexión" con las variables de la primera función
//! Closure le da a una función acceso a todas las variables de su función padre, incluso despues de que está haya retornado.

const secureBooking = function () {
  let passengerCount = 0;
  
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

//! Example 1

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f(); // -> 46 (a * 2)
console.dir(f);

// Re-asignando la función f

h();
f(); // -> 1554 (b * 2)
console.dir(f);

//! Example 2 Timer

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  
  //? setTimeout -> 1000 -> 1sec
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  
  console.log(`Will Start boarding in ${wait}seconds`);
};

boardPassengers(180, 3);


//! Coding Challenge #2

This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  
  document.body.addEventListener('click', function () {
    header.style.color = header.style.color === 'red' ? 'blue' : 'red';
  });
})();

*/
