'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//! 1) Mostrar los movimientos desde un array
const displayMovements = function (movements) {
  //? Limpiando todo el html que hay en el container de movimientos
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>
    `;

    //? (position, html)
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*

//* Array methods

let arr = ['a', 'b', 'c', 'd', 'e'];



//? Slice -> Extraer partes de un array sin modificar el origen

console.log(arr.slice(2)); // C D E
console.log(arr.slice(2, 4)); // C D
console.log(arr.slice(-2)); // -> D E
console.log(arr.slice(-1)); // -> E
console.log(arr.slice(1, -2)); // -> C
console.log(arr.slice()); // -> ['a', 'b', 'c', 'd', 'e']
console.log([...arr]);


//? Splice -> Hace lo mismo que slice pero cambia el arreglo de origen

// console.log(arr.splice(2));
console.log(arr); // ['a', 'b', 'c', 'd', 'e']

//! Eliminando el ultimo elemento del arreglo
arr.splice(-1);
console.log(arr); // ['a', 'b', 'c', 'd']
arr.splice(1, 2);
console.log(arr); // ['a', 'd'] -> Parte de la pos 1 y elimina el inicio y +1 (2)

//? Reverse -> Invierte los elementos del arreglo y cambia el origen

const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // ['f', 'g', 'h', 'i', 'j']
console.log(arr2);

//? Concat -> Junta los dos arrays

const letters = arr.concat(arr2); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
console.log(letters);
console.log([...arr, ...arr2]); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

//? Join -> Junta el array y se puede especificar con qué caracter

console.log(letters.join(' - ')); // "a - b - c - d - e - f - g - h - i - j"

//? At method

const arr = [23, 11, 64];
console.log(arr[0]); // 23
console.log(arr.at(0)); // 23

// Getting the last array element

console.log(arr[arr.length - 1]); // 64
console.log(arr.slice(-1)[0]); // 64
console.log(arr.at(-1)); // 64


//* Looping arrays -> forEach


//? For of example

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    //? abs -> valor absoluto
  console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`);
}
}

console.log('-------- For each ----------');

//? forEach example
//! Callback(elemento, index, array origen) -> IMPORTANTE
movements.forEach(function (mov, i, array) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(mov)}`);
}
});

// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

//? When use for or forEach
//! For each cant break, siempre recorre todo el array


//* ForEach maps and sets

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

*/

///////////////////////////////
//! Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀

const checkDogs = function (dogsJulia, dogsKate) {
  let juliaCheck = '';
  let kateCheck = '';
  let allDogsCheck = '';
  
  //? Shallow copy 0 -2
  const shallowCopyJulia = [...dogsJulia];
  shallowCopyJulia.splice(-2, 2); // Last 2
  shallowCopyJulia.splice(0, 1); // First
  
  //? 2. Concat
  
  const allDogs = shallowCopyJulia.concat(dogsKate);
  console.log(allDogs);
  
  // dogsJulia.forEach(function (value, index, arr) {
    //   juliaCheck =
    //     value >= 3
    //       ? `Dog Number ${index + 1} is an adult, is ${value} years old`
    //       : `Dog Number ${index + 1} is an puppy, is ${value} years old`;
    //   console.log(juliaCheck);
    // });
    
    // dogsKate.forEach(function (value, index, arr) {
      //   kateCheck =
      //     value >= 3
      //       ? `Dog Number ${index + 1} is an adult, is ${value} years old`
      //       : `Dog Number ${index + 1} is an puppy, is ${value} years old`;
      //   console.log(kateCheck);
      // });
      
      allDogs.forEach(function (value, index, arr) {
        allDogsCheck =
        value >= 3
        ? `Dog Number ${index + 1} is an adult, is ${value} years old`
        : `Dog Number ${index + 1} is an puppy, is ${value} years old`;
        console.log(allDogsCheck);
      });
    };
    
    checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
    // checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
    
*/

//* Map method

const eurToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  // return mov * eurToUsd;
  return 23;
});

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

//! WORKING IN THE PROJECT!
