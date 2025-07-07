'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2025-06-28T23:36:17.929Z',
    '2025-07-01T10:51:36.790Z',
  ],
  currency: 'CLP',
  locale: 'es-CL', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2025-07-02T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions
//! 3) Diferencia entre fechas para dejar registro de hace cuanto se hizo un movimiento en bankist app
const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  //! 2) Sorting mov and movDates

  const combinedMovsDates = acc.movements.map((mov, i) => ({
    movement: mov,
    movementDate: acc.movementsDates.at(i),
  }));

  if (sort) combinedMovsDates.sort((a, b) => a.movement - b.movement);

  // const movs = sort
  //   ? acc.movements.slice().sort((a, b) => a - b)
  //   : acc.movements;

  combinedMovsDates.forEach(function (obj, i) {
    const { movement, movementDate } = obj;
    const type = movement > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(movementDate);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(movement, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  const formattedMov = formatCur(acc.balance, acc.locale, acc.currency);

  labelBalance.textContent = `${formattedMov}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(out, acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

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

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

//! FAKE ALWAYS LOGGED IN
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;
//! ------------------------------

//! ------------------------------

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //! Experimentando con la API

    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long',
    };

    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add tansfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(+inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*

//* ---------------------------------
//* CONVERTING AND CHECKING NUMBERS *
//* ---------------------------------

//? Todos los numeros son tratados como floats

console.log(23 === 23.0); // true

//Conversion
console.log(Number('23'));
console.log(+'23');

//Parsing

console.log(Number.parseInt('30px', 10)); // 30
console.log(Number.parseInt('e23', 10)); // NaN

//Parse float

console.log(Number.parseInt('  2.5rem  ')); // 2
console.log(Number.parseFloat('  2.5rem  ')); // 2.5

// Number.isNaN -> NaN -> Not a number

console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20X')); // true
console.log(Number.isNaN(23 / 0)); // false -> es infinity

// Number.isFinite -> Se puede contar, tiene un limite definido
//? Mejor forma de saber si es un numero o no

console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20X')); // false
console.log(Number.isFinite(23 / 0)); // false

// Number.isInteger -> Es un entero o no

console.log(Number.isInteger(20)); // true
console.log(Number.isInteger('20')); // false
console.log(Number.isInteger(+'20X')); // false
console.log(Number.isInteger(23 / 0)); // false


//* ---------------------------------
//* MATH AND ROUNDING               *
//* ---------------------------------

// Raiz cuadrada
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // 2

// Max value of an array
console.log(Math.max(5, 18, 23, 11, 2)); // 23
console.log(Math.max(5, 18, '23', 11, 2)); // 23

// Valor minimo de un array
console.log(Math.min(5, 18, 23, 11, 2));
console.log(Math.PI * Number.parseFloat('10px') ** 2);

// Generar un numero aleatorio
console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

console.log(randomInt(10, 20));
console.log(randomInt(0, 3));

// Truncar numeros
console.log(Math.trunc(23.3)); // 23

// Redondear numeros

console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24

// Redondear hacia arriba

console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24

// Redondear hacia abajo
console.log(Math.floor(23.3)); // 23
console.log(Math.floor(23.9)); // 23

// Redondear decimales

console.log((2.7).toFixed(0)); // Retorna string
console.log((2.7).toFixed(3)); // Retorna string
console.log((2.345).toFixed(2)); // 2.35 string
console.log(+(2.345).toFixed(2)); // 2.35 number

//* ---------------------------------
//* THE REMAINDER OPERATOR          *
//* ---------------------------------

console.log(5 % 2); // 1
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3); // 2.6
console.log(8 / 3); // 8 = 3 * 2 + 2

console.log(6 % 2); // 0
console.log(6 / 2); // 6 = 2 * 3

console.log(7 % 2); // 1
console.log(7 / 2); // 7 = 2 * 3 + 1

const isEven = n => n % 2 === 0;

console.log(isEven(8)); // true
console.log(isEven(23)); // false
console.log(isEven(514)); // true

// Se usa para querer hacer algo en N momento

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});

//* ---------------------------------
//* NUMERIC SEPARATORS              *
//* ---------------------------------

// Thousand separatos 287,460,000,000
const diamenter = 287_460_000_000;
console.log(diamenter); //287460000000

const price = 345_99;
console.log(price); // 34599

const trasnferFee1 = 15_00;
const trasnferFee2 = 1_500;

const PI = 3.14_15;
console.log(PI); // 3.1415

console.log(Number('230_000')); // NaN


//* ---------------------------------
//* WORKING WHIT BIGINT             *
//* ---------------------------------

console.log(2 ** 53 - 1); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

console.log(12818281281828128128812812121212n);
console.log(BigInt(12818281281828128128812812121212));

// Operations
console.log(10000n + 10000n);
console.log(12390139213091301391093109n + 10000n);

const huge = 12919291291939213919319n;
const num = 23;

console.log(huge * BigInt(num)); // 297143699714601920144337n

console.log(20n > 15); // true
console.log(20n === 20); // false bigInt - number
console.log(20n == 20); // true
console.log(20n == '20'); // true

console.log(huge + ' Is REALLY big !!');

// Divisions

console.log(11n / 3n); // 3n
console.log(10 / 3); // 3.333333333335


//* ---------------------------------
//* CREATING DATES                  *
//* ---------------------------------

//? Crear una fecha

const now = new Date();
console.log(now);

console.log(new Date('Wed Jul 02 2025 15:24:14'));
console.log(new Date('December 24, 2015'));
console.log(new Date(account1.movementsDates[0]));

// (año,mes,dia,horas,minutos,segundos)
console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

//? Working with dates

const future = new Date(2037, 10, 19, 15, 23);
console.log(future); // Thu Nov 19 2037 15:23:00 GMT-0300 (hora de verano de Chile)
console.log(future.getFullYear()); //2037
console.log(future.getMonth()); // 10
console.log(future.getDate()); // 19
console.log(future.getDay()); // 4
console.log(future.getHours()); // 15
console.log(future.getMinutes()); // 23
console.log(future.getSeconds()); // 0
console.log(future.toISOString()); // 2037-11-19T18:23:00.000Z
console.log(future.getTime()); // 2142267780000

console.log(new Date(2142267780000)); // Thu Nov 19 2037 15:23:00 GMT-0300 (hora de verano de Chile)
console.log(Date.now()); // 1751485094625

//? Modificar informacion de la fecha
future.setFullYear(2040);
console.log(future); // Mon Nov 19 2040 15:23:00 GMT-0300 (hora de verano de Chile)


//* ---------------------------------
//* ADDING DATES TO "BANKIST" APP   *
//* ---------------------------------

//* ---------------------------------
//* SOLVING SORTING BUG             *
//* ---------------------------------

//* ---------------------------------
//* OPERATIONS WITH DATES           *
//* ---------------------------------
console.log(typeof 20n); // bigint

const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);



const days1 = calcDaysPassed(
  new Date(2037, 3, 4),
  new Date(2037, 3, 14, 10, 8)
);
console.log(days1);


//* ---------------------------------
//* INTERNATIONALIZING DATES (INTL) *
//* ---------------------------------

//? INTERNATIONALIZING API

//! Experimentando con la API

    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long',
    };

    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

//* ---------------------------------
//* INTERNATIONALIZING NUMBERS (INTL) *
//* ---------------------------------
*/

const num = 3884764.23;

const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'CLP',
};

console.log('Chile: ' + new Intl.NumberFormat('es-CL', options).format(num)); // Chile: $3.884.764

console.log('US: ' + new Intl.NumberFormat('en-US').format(num)); // US: 3,884,764.23
console.log('Germany: ' + new Intl.NumberFormat('de-DE').format(num)); // Germany: 3.884.764,23
console.log('Syria: ' + new Intl.NumberFormat('ar-SY').format(num)); // Syria: ٣٬٨٨٤٬٧٦٤٫٢٣
console.log(
  navigator.language +
    ' ' +
    new Intl.NumberFormat(navigator.language).format(num)
); // es-419 3,884,764.23
