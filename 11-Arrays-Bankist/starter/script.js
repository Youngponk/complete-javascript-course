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

//! WORKING IN THE PROJECT

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

//! 2) Creating and Computing Usernames for the clients

//? Se debe mostrar en la página web las iniciales del nombre y apellido del dueño(usuario)

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

// createUsernames(accounts);
// console.log(accounts);

/* 
? Resumen: 
? 1. toLowerCase -> minus word
? 2. split() -> retorna array con las palabras separadas
? 3. map() -> recorres el array y nos devuelve un nuevo array con las iniciales
? 4. join() -> unimos las iniciales para que retorne un string
*/

//! Calculate the balance

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};

calcDisplayBalance(account1.movements);

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
    
    
//* Map method
//? Retorna el array modificado por el metodo Map
//? Return -> guardara lo que retorne en cada posición del array
const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
  //   return mov * eurToUsd;
  // })
  
const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd);
}
console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov, i, arr) => {
  return `Movement ${i + 1}: You ${
    mov > 0 ? 'deposited' : 'withdrew'
  } ${Math.abs(mov)}`;
});
  
  console.log(movementsDescriptions);
  
//* Filter method
//? Returnorna los valores considerados true dentro de la función
// const deposits = movements.filter(function (mov) {
  //   return mov > 0;
  // });
  const deposits = movements.filter(mov => mov > 0);
  console.log(movements);
  console.log(deposits);
  
  //! Another way to do it
  const depositsFor = [];
  for (const mov of movements) if (mov > 0) depositsFor.push(mov);
  console.log(depositsFor);
  
  //! Challenge do the same thing whit the withdrawals
  
  const withdrawals = movements.filter(mov => mov < 0);
  console.log(withdrawals); 
    
//* Reduce Method
//? Se usa para que todos los valores en un array se transformen a un solo valor

console.log(movements);
//? Acumulator -> Snowball
// const balance = movements.reduce(function (acumulator, mov, i, arr) {
//   console.log(`Iteration ${i}: ${acumulator}`);
//   return acumulator + mov;
// }, 0);

const balance = movements.reduce((accumulator, mov) => accumulator + mov, 0);

console.log(balance);

//! Another way to do it

let balance2 = 0;

for (const mov of movements) balance2 += mov;
console.log(balance2);

//? Maximum value whit reduce

const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);

console.log(max);

//////////////////////////////////////
//! Coding Challenge #2

Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀

console.log([5, 2, 4, 1, 15, 8, 3]);
console.log([16, 6, 10, 5, 6, 1, 4]);

const calcAverageHumanAge = function (ages) {
  const humanAges = ages
  .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
  .filter(age => age >= 18)
  .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  console.log(humanAges);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

*/

//* Chaining the methods
//? Filter -> if array
//? Map -> Transformar datos del array
//? reduce -> Devolver 1 valor de todo el array

const eurToUsd = 1.1;
console.log(movements);

const depositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);

console.log(depositsUSD);
