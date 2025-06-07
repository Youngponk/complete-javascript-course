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

*/

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
