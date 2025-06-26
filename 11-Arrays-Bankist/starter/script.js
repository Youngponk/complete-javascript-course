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
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
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
//! 8) ordenando los movimientos de menor a mayor y viceversa
const displayMovements = function (movements, sort = false) {
  //? Limpiando todo el html que hay en el container de movimientos
  containerMovements.innerHTML = '';

  //? 8)

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    //? (position, html)
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// displayMovements(account1.movements);

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

createUsernames(accounts);
// console.log(accounts);

/* 
? Resumen: 
? 1. toLowerCase -> minus word
? 2. split() -> retorna array con las palabras separadas
? 3. map() -> recorres el array y nos devuelve un nuevo array con las iniciales
? 4. join() -> unimos las iniciales para que retorne un string
*/

//! 7) Refactorizando función para updatear UI

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

//! 3) Calculate the balance

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

// calcDisplayBalance(account1.movements);

//! 4) Resumen de balance

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interests = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int);
  labelSumInterest.textContent = `${interests}€`;
};

// calcDisplaySummary(account1.movements);

//! 5) Implementing login logic

//? Event handler
let currentAccount;

btnLogin.addEventListener('click', function (event) {
  //? Prevent the form from submitting the information
  //! Esto pasa porque el btn esta dentro de una etiqueta form
  event.preventDefault();

  //? Retornar el usuario cuando el username es correcto
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display the UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 1;

    updateUI(currentAccount);

    // Clearing the inputs

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
  }
});

//! 6) Transfer money to other client

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  //? Cleaning the inputs
  inputTransferAmount.value = '';
  inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

//! 9) Pedir prestamo

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add the movement of the loan
    currentAccount.movements.push(amount);

    // Clear inputs

    inputLoanAmount.value = '';

    // Update UI
    updateUI(currentAccount);
  }
});

//! 8) Deleting accounts

btnClose.addEventListener('click', function (e) {
  //
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // Delete account
    accounts.splice(index, 1);
    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputClosePin.value = '';
  inputCloseUsername.value = '';
});

//! 8b) Creating the sort btn function
let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

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

///////////////////////////////////////
//! Coding Challenge #3

Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀

const calcAverageHumanAge = ages =>
  ages
.map(age => (age <= 2 ? age * 2 : 16 + age * 4))
.filter(age => age >= 18)
.reduce((acc, age, i, arr) => acc + age / arr.length, 0);

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));


//* Find method
//? Retorna el primer elemento que cumpla la condición

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

//! Another way to do it
for (const acc of accounts)
if (acc.owner === 'Jessica Davis') console.log(acc.owner);


//* FindIndex method

btnClose.addEventListener('click', function (e) {
  //
  e.preventDefault();
  
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // Delete account
    accounts.splice(index, 1);
    // Hide UI
    containerApp.style.opacity = 0;
  }
  
  inputClosePin.value = '';
  inputCloseUsername.value = '';
});


//* FindLast and FindLastIndex

console.log(movements);
const lastWithdrawal = movements.findLast(mov => mov > 1000);
const lastWithdrawalIndex = movements.findLastIndex(mov => mov > 1000);
console.log(lastWithdrawal, lastWithdrawalIndex); // 1300, 7

//! Challenge -> 'Your latest large movement was X movements ago'
console.log(
  `Your latest large movements was ${
    movements.length - movements.findLastIndex(mov => mov > 1000)
  } movements ago`
); // Your latest large movements was 1 movements ago


//* Some and every method

console.log(movements); // [200, 450, -400, 3000, -650, -130, 70, 1300]
//? Includes -> Bol Revisa si existe -130
console.log(movements.includes(-130)); // true

//? some -> Bol Libertad con condiciones
const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits); // true -> existe un movimiento mayor a 1500€

//? Every -> Bol  Todos los elementos deben ser true o retornara false

console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

//! Separate callback

const deposit = mov => mov > 0;
console.log(movements.some(deposit)); // true
console.log(movements.every(deposit)); // false
console.log(movements.filter(deposit)); //[200, 450, 3000, 70, 1300]

//* flat and flatMap

//? Flat -> Retorna el array con todos los elementos en un solo nivel
//? Elimina los "sub-arrays"
//? El argumento son los niveles que quieres aplanar (por defecto 1)
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(arr.flat()); // [1, 2, 3, 4, 5, 6, 7,8, 9]

//? Flat(2) -> aplanar 2 niveles

const arrDeep = [[[1, 2], 3], [4, [5, 6]], [7], 8, 9];

console.log(arrDeep.flat(2));

//! Practical example

const overallBalance = accounts
.flatMap(acc => acc.movements)
.reduce((acc, mov) => acc + mov, 0);

console.log(overallBalance);

//? flatMap -> combina los metodos flat y map para optimizar el funcionamiento


///////////////////////////////////////
//! Coding Challenge #4

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:

const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];

//? 1. Store average weigth of Husky

const huskyWeight = breeds.find(breed => breed.breed === 'Husky').averageWeight;

console.log(huskyWeight);

//? 2. Find the name of the only breed that likes both "running" and "fetch"

const findBreed = breeds.find(
  breed =>
    breed.activities.includes('running') && breed.activities.includes('fetch')
).breed;

console.log(findBreed);

//? 3. Create an array "allActivities" of all the activities of all the dog breeds

const allActivities = breeds.flatMap(breed => breed.activities);

console.log(allActivities);

//? 4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.

const uniqueActivities = [...new Set(allActivities)];

console.log(uniqueActivities);

//? 5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".

const swimmingAdjacentAdd = [
  ...new Set(
    breeds
    .filter(breed => breed.activities.includes('swimming'))
    .flatMap(breed => breed.activities)
    .filter(activity => activity !== 'swimming')
  ),
];

console.log(swimmingAdjacentAdd);

//? 6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".

console.log(breeds.every(breed => breed.averageWeight > 10));

//? 7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

console.log(breeds.some(breed => breed.activities.length >= 3));

//? BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

console.log(
  Math.max(
    ...breeds
    .filter(breed => breed.activities.includes('fetch'))
    .map(breed => breed.averageWeight)
  )
);


//* Sorting arrays

//? Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

//? Numbers

console.log(movements);

//! return < 0, A, B (keep order)
//! return > 0, A, B (switch order)

//? Ascending
// movements.sort((a, b) => {
  //   if (a > b) return 1;
  //   if (a < b) return -1;
// });

//? Another way to order in Asc order

movements.sort((a, b) => a - b);

console.log(movements);

//? Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });

//? Another way to order in Desc order
movements.sort((a, b) => b - a);

console.log(movements);


//* Array Grouping
//? Sirve para agrupar/seccionar elementos de un array basados en una condición

console.log(movements);

const groupedMovements = Object.groupBy(movements, movement =>
  movement > 0 ? 'deposits' : 'withdrawals'
);
console.log(groupedMovements);

const groupedByActivity = Object.groupBy(accounts, account => {
  const movementCount = account.movements.length;
  
  if (movementCount >= 8) return 'very active';
  if (movementCount >= 4) return 'active';
  if (movementCount >= 1) return 'moderate';
  return 'inactive';
});

console.log(groupedByActivity);

const groupedAccounts = Object.groupBy(accounts, account => account.type);
console.log(groupedAccounts);

//* More ways of creating and filling arrays

console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5)); //? Intentamos rellenar el array creado con los 7 espacios vacios pero no lo hace

//? Fill method -> Rellena el array con lo que le indiquemos
//? Fill(valor, start, end);

// x.fill(1);
console.log(x); // 7, 7, 7, 7, 7, 7, 7
x.fill(1, 3, 5);
console.log(x);

//? Mutar arrays ya existentes

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.fill(23, 2, 6); //? agregar 23 desde la pos 2  a las 6
console.log(arr); // [1, 2, 3, 4, 23, 23, 7]

//? Array.from

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

const rolldice = Array.from(
  { length: 100 },
  () => Math.floor(Math.random() * 6) + 1
);
console.log(rolldice);

//! Rescatar valores desde la UI
labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];

  console.log(movementsUI2);
});


//* Non-destructive alternatives -> toReverse, toSorted, toSplice
//? Alternativas que no mutan el array original

console.log(movements);
const reversedMov = movements.toReversed();

console.log(reversedMov);
console.log(movements);

// movements[1] = 2000;
const newMovements = movements.with(1, 2000);
console.log(newMovements);

console.log(movements);

//* ---------------------------------------
//* SUMMARY: WHICH ARRAY METHOD TO USE!?  *
//* ---------------------------------------

//! TO MUTATE THE ORIGINAL ARRAY

//? Add to original array

// .push() -> end
// .unshift() -> start

//? Remove from original array

// .pop() -> end
// .shift() -> start
// .splice() -> any

//? Others

// .reverse -> revierte el array
// .sort -> ordena el array dependiendo de lo que le entregemos
// .fill -> rellenamos un array con lo que entregemos en la función

//! A NEW ARRAY BASED ON ORIGINAL

//? Si queremos mantener el mismo largo que el array original

// .map() -> loop

//? Si queres filtrar bajo una condición
// .filter() -> filtrar los elementos del array

//? Queremos extraer una porción del array

// .slice()

//? Queremos cambiar solo un elemento

//. with() -> remplazamos un elemento del array

//? Aplanar los arrays dentro de este

// .flat() -> indicar los niveles de aplanamiento
// .flatMap() -> flat + map unidos

//? Reversed
// .toReversed

//? Para ordenar
// .toSorted

//? Agregar o eliminar elementos del array
// .toSplice

//? Unir dos arrays
//.concat

//! Retornar el index de un array

//? basado en un valor
// .indexOf
//? Basado en una condición
// .findIndex
// .findLastIndex

//! Retornar un elemento del array

//? Basado en una condición

// .find()
// .findLast()

//? Basado en la posición

//. at()

//! Saber si el array incluye

//? Basado en un valor

//.includes()

//? Basado en una condición

// .some()
// .every()

//! A new string

//? Basado en un separados

//.join()

//! Para transformar un valor

//? Basado en un acumulador

// .reduce() -> recorre el array para que todo se transforme a un valor

//! Para recorrer un array

//? Basado en una función callback

// .forEach();

//! Agrupar el array por categorias

// .Object.groupBy

//? Crear un array desde  0

// .Array.from

//? Crear un array desde 0 con n valores vacios (usar con .fill)

// new Array(n)

//? Juntar dos o más

// [...arr1, ...arr2]

//? Crear un array que contenga valores unicos del array origen

// [...new Set(arr)]

//? Crear un array que contenga elementos unicos que estén presentes en el array 1 y en el array 2

// [...new Set(arr1).intersection(new set(arr2))]
*/

//* ------------------------------
//* ARRAY METHOD PRACTICE        *
//* ------------------------------

//* 1. Suma total de los depositos

const bankDepositSum = accounts
  .flatMap(account => account.movements)
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);

console.log(bankDepositSum);

//* 2. Contar cuantos depositos han habido en el banco (minimo 1000)

//? Primera solución
// const numDeposits1000 = accounts
//   .flatMap(account => account.movements)
//   .filter(mov => mov >= 1000).length;
// console.log(numDeposits1000);

const numDeposits1000 = accounts.flatMap(account => account.movements).reduce();
console.log(numDeposits1000);
