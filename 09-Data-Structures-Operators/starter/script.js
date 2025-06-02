'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 12 + 12,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //? ES6 enhaced object literals
  openingHours,

  //? ES6 no se necesita declarar un metodo como función

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicius pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    let t = '';
    if (otherIngredients.length === 0) {
      t = `Your pizza was made with: ${mainIngredient}.`;
    } else {
      t = `Your pizza was made with: ${mainIngredient}, `;
    }
    for (let i = 0; i < otherIngredients.length; i++) {
      if (i === otherIngredients.length - 1) {
        t += `${otherIngredients[i]}.`;
      } else {
        t += `${otherIngredients[i]}, `;
      }
    }

    return t;
  },
};

//! Data for the challenges

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//* WORKING WHIT STRINGS - PT3

// Split and join

console.log('a+very+nice+string'.split('+'));
console.log('Erwin Chavez'.split(' '));

const [firstName, lastName] = 'Erwin Chavez'.split(' ');
console.log(firstName, lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

//! Capitalize whit join and split

// My solution

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   let str = '';
//   for (let i = 0; i < names.length; i++) {
//     str += names[i][0].toUpperCase() + names[i].slice(1) + ' ';
//   }
//   console.log(str);
// };

//! John solution

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     namesUpper.push(n[0].toUpperCase() + n.slice(1));
//   }
//   console.log(namesUpper.join(' '));
// };

//! John challenge

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('isidora martina castillo perez');

// Padding -> relleno

const msg = 'Go to gate 23!';
console.log(msg.padStart(25, '+').padEnd(35, '+'));
console.log('Jonas'.padStart(25, '+'));

/*
//* WORKING WHIT STRINGS - PT2

const airline = 'Tap Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name

let passenger = 'eRwIn'; // Expected -> Erwin

passenger = passenger.toLowerCase(); // erwin
passenger = passenger[0].toUpperCase() + passenger.slice(1); // Erwin

console.log(passenger);

// Comparing Emails

const email = 'hello@erwin.io';
const loginEmail = ' Hello@Erwin.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim(); // -> delete white spaces
console.log(trimmedEmail === email); // true

const normalizedEmail =
  email === loginEmail.toLowerCase().trim()
    ? 'Los emails son iguales'
    : 'Los mails son diferentes';
console.log(normalizedEmail); // Los emails son iguales

// replacing
const priceGB = '288,97€';
const priceUS = priceGB.replace('€', '$').replace(',', '.');
console.log(priceUS); // '288.97$'

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement);
console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate')); // All passengers come to boarding gate 23. Boarding gate 23!

// Booleans

const plane = 'Airbus A320neo';
console.log(plane.includes('A320neo')); // true
console.log(plane.includes('Boeing')); // false
console.log(plane.startsWith('Air')); // true

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW airbus family');
}

// Practice exercise

const checkBaggage = function (items) {
  let baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log(`You're Welcome aboard!`);
  }
};

checkBaggage('I have a laptop, some fof and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

//* WORKING WHIT STRINGS - PT1

const airline = 'Tap Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
console.log(airline.length);
console.log('B737'.length);

//? String methods

// Index
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

// Slice -> corta y almacena el valor

console.log(airline.slice(4));
console.log(airline.slice(4, 7)); // -> Index desde el que parte y en el que corta la palabra

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1, airline.length));

console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // A B C Pasillo D E F

  const s =
    seat.indexOf('B') !== -1 || seat.indexOf('E') !== -1
      ? 'Middle Seat!'
      : 'Not a middle seat';
  console.log(s);
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Erwin'));
console.log(typeof new String('Erwin'));
console.log(typeof new String('Erwin').slice(1));

//! //////////////////////////
//! Coding Challenge #3

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the mins are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

//1. Create an array 'events' of the different game events that happened (no duplicates)

const events = [...new Set(gameEvents.values())];
console.log(events);

//2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.

gameEvents.delete(64);
console.log(gameEvents);

//3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

const time = [...gameEvents.keys()];
console.log(time);

console.log(
  `An event happened, on average, every ${
    time[time.length - 1] / gameEvents.size
  } minutes`
);

//4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//      [FIRST HALF] 17: ⚽️ GOAL

for (const [min, value] of gameEvents) {
  console.log(
    `${min <= 45 ? '[FIRST HALF]' : '[SECOND HALF]'} ${min}: ${value}`
  );
}

// GOOD LUCK 😀

//! WICH DATA STRUCTURE TO USE !?

//? Source of data -> 1. From te program 2. From the UI (DOM interactions) 3. From external resources (APIs)

//? Data structure -> Arrays, Objects, Sets, Map

//? Simple List -> Arrays and Sets
//? min/Value Pairs -> Objects and Maps

//! Arrays vs Sets

//? Arrays

// Usar cuando necesitas una lista de valores ordenadas, no importan los duplicados y necesitas manipular los datos.

const tasks = ['Code', 'Eat', 'Code'];
console.log(tasks); // ['Code', 'Eat', 'Code']

//? Sets

// Usar cuando se necesita trabajar con valores únicos, usar cuando high-performance es necesario o cuando se necesita eliminar duplicados

const tasks2 = new Set(['Code', 'Eat', 'Code']);
console.log(tasks2); // Set {'Code', 'Eat'}

//! Objects vs Maps

//? Objets

// Uso tradicional de almacenamiento min/value, facil de escribir y acceder con '.' y []

const task3 = {
  task: 'Code',
  date: 'today',
  repeat: true,
};

//? Maps

// Mejor performance
// min pueden tener cualquier tipo de datos
// Fácil de iterar
// Facil de obtener el size

const task4 = new Map([
  ['task', 'Code'],
  ['date', 'today'],
  [false, 'Start coding!'],
]);

//* Maps -> iteration

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct🎉'],
  [false, 'Try again!'],
]);

console.log(question);

//? Convert object to map

console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//? Iteration

//! Quizz app

console.log(question.get('question'));

for (const [min, value] of question) {
  if (typeof min === 'number') console.log(`Answer ${min}: ${value}`);
}

const answer = Number(prompt('Your answer'));
console.log(question.get(answer === question.get('correct')));

//? Convert map to array

console.log([...question]);
// console.log(question.entries());
console.log(...question.mins());
console.log(...question.values());

//* Maps -> Fundamentals
//? Estructura de datos

const rest = new Map();

//? Adding values to the map

rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal'); // set return the map
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

//? Getting values from a map

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

console.log(rest);

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // We are closed :(

//? Checking values in maps

console.log(rest.has('categories')); // True

//? Delete the value whit the min

rest.delete(2);
console.log(rest);

//? Size of map

console.log(rest.size); // 7

//? Removing all the values

// rest.clear();

//? Using objects and arrays as mins

const arr = [1, 2];

rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'heading');
console.log(rest);
console.log(rest.get(arr));


//* Sets (Conjuntos)
//? No tiene duplicados

const orderSets = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSets);

console.log(new Set('Jonas')); // {'J', 'o', 'n', 'a', 's'}

console.log(orderSets.size); // 3
console.log(orderSets.has('Pizza')); // True
console.log(orderSets.has('Bread')); // False

orderSets.add('Garlic Bread'); // Added {'Pasta', 'Pizza', 'Risotto', 'Garlic Bread'}
orderSets.add('Garlic Bread'); // Ignored bcs we added the garlic bread before
console.log(orderSets);
orderSets.delete('Risotto'); // Deleted
// orderSets.clear(); // Clear the set
console.log(orderSets); // {'Pasta', 'Pizza', 'Garlic Bread'}

for (const order of orderSets) console.log(order);

//! Uso principal
//? Filtar valores unicos de un array

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
//? Convertir un set a un array
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set('erwinchavez').size);

//! 7 More metodos para los Sets

// const uniqueFood = [new Set([...mexicanFoods, ...italianFoods])];
//? Si necesitamos unir 2 set con elementos que se repiten en los dos

const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection:', commonFoods);
console.log([...commonFoods]);

//? Todos los elementos que estan en los dos sets pero sin duplicarlos

const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log(italianMexicanFusion);
console.log([...italianMexicanFusion]);

console.log([...new Set([...italianFoods, ...mexicanFoods])]);

//? Entrega un nuevo set que contiene todos los elementos que estan en el primer set y no en el segundo

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log('Italian unique: ', [...uniqueItalianFoods]);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log('Mexican unique: ', [...uniqueMexicanFoods]);

//? Nos entrega la diferencia entre dos sets de

const uniqueItalianAndMexicanFood =
  italianFoods.symmetricDifference(mexicanFoods);
console.log([...uniqueItalianAndMexicanFood]);

console.log(italianFoods.isDisjointFrom(mexicanFoods));

///////////////////////////////////////
//! Coding Challenge #2

//Let's continue with our football betting app!

//1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

//! My solution -> Should used for of

for (let i = 0; i < game.scored.length; i++) {
  console.log(`Goal ${i + 1}: ${game.scored[i]}`);
}

//? Good one!

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

//2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

const odds = Object.values(game.odds);

let avg = 0;

for (const odd of odds) avg += odd;
console.log(avg / odds.length);

//3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//Odd of victory Bayern Munich: 1.33
//Odd of draw: 3.25
//Odd of victory Borrussia Dortmund: 6.5
//Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

//BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//{
//Gnarby: 1,
//Hummels: 1,
//Lewandowski: 2
//}

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

//GOOD LUCK 😀

//* Looping Objects: Objects mins, values and entries

//? Properties names
const properties = Object.mins(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//? Properties values

const values = Object.values(openingHours);
console.log(values);

//? Properties entries

const entries = Object.entries(openingHours);
console.log(entries);


for (const [min, { open, close }] of entries) {
  console.log(`on ${min} we open at ${open} and close at ${close}`);
}


//* Optional Chaining (Encadenamiento opcional)

if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

console.log(restaurant.openingHours.mon?.open); // Error: can't read open
//? WHIT optional chaining
console.log(restaurant.openingHours?.mon?.open); // Return undefined si no encuentra mon

// Example

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//? METHODS

console.log(restaurant.order?.(0, 1) ?? 'Method does not exists');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exists');

//? Arrays -> Checking if an array is empty

// const users = [
//   {
//     name: 'Jonas',
//     email: 'hello@jonas.io',
//   },
// ];

const users = [];

//? Optional chaining

console.log(users[0]?.name ?? 'User array empty');

//? WHITHOUT

if (users.length > 0) console.log(users[0].name);
else console.log('User array empty');

//* Objetos literales mejorados

//* FOR-OF LOOPING ARRAY

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//? La posición 0 indica el index y la posición 1 indica el elemento en esa pos -> como una matriz
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

//! THE GOOD WAY!
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

//!C1/////////////////////////////////
//! Challenge #1

We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:



//1. Create one player array for each team (variables 'players1' and 'players2')

//! My solution -> Not that good
// const player1 = [...game.players[0]];
// const player2 = [...game.players[1]];
// console.log(player1, player2);
//? Good solution

const [p1, p2] = game.players;
console.log(p1, p2);

//2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

//! Good solution -> Correct!
const [gk, ...fieldPlayers] = p1;
console.log(gk, fieldPlayers);

//3. Create an array 'allPlayers' containing all players of both teams (22 players)

const allPlayers = [...p1, ...p2];
console.log(allPlayers);

//4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

const player1Final = [...p1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(player1Final);

//5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

//! My solution -> good if u only need the odds
const { team1, x: draw, team2 } = game.odds;

//? Course solution -> good if u want to look for other properties
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

//6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

function printGoals(...names) {
  console.log(names);
  console.log(`Cantidad de goles totales: ${names.length}`);
}

printGoals(...game.scored);

//7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

//! Data: team1 -> 1.33 lower one

console.log(game);
console.log(game.odds.team1 < game.odds.team2 && 'Team1 is likely to win');
console.log(game.odds.team1 > game.odds.team2 && 'Team2 is likely to win');

//TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

//GOOD LUCK 😀

//! C1 ENDS HERE -------------------------------


//* Logical assignament operators

//? Queremos agregar a todos los objetos que no tienen la propiedad numGuests para que si la tengan.

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanny Rossi',
};

//? Or operator para verificar si existe esta propiedad en el objeto, de lo contrario que la cree y le damos un valor default

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//? nullish assignment operator (null or undefined)

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//? AND operator to make the owner anonymous

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

//* The nullish coalescing operator ??
//? Problema: Al hacer esta lógica para que en caso de que no exista la propiedad numGuests en el objeto restaurant inicialice la propiedad y se le asigne un valor por defecto, si asignamos que el valor si existe y es 0. Nos devolvera el valor que designamos como default y no 0. Lo cual provocaría un bug.

restaurant.numGuests = 0;
const guest = restaurant.numGuests || 10;
console.log(guest);

// Nullish -> null and undefined (NOT 0 or '');
//? No acepta todos los falsy values

const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
//* && and || Operator

//? Pueden usar cualquier tipo de datos
//? Pueden retornar cualquier tipo de dato
//? Short-circuit -> Ocurre cuando se cumple la primera condición

console.log('-------- OR --------');

console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

//! Setting default values

restaurant.numGuests = 23;

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('-------- AND --------');

//? Shor-circuit ocurre cuando la primera condición es falsa y se devuelve ese valor

console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'Jonas');

if (restaurant.orderPizza) {
  console.log(restaurant.orderPizza('mushrooms', 'spinach'));
}

//? Si todos los valores son true va a devolver el último que se evalua -> Si el valor evaluado es falso, retornara ese.

restaurant.orderPizza &&
  console.log(restaurant.orderPizza('mushrooms', 'spinach'));


//* Rest Pattern and Parameters

//! 1)Destructuración

//? Used to do the opossite of spread operator -> Colect the rest of the element in the array or no usados.

// SPREAD, because on RIGHT  side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//! 2)Functions Rest parameter

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

console.log(restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach'));
console.log(restaurant.orderPizza('mushrooms'));

//* Spread operator (...)

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); // [1, 2, 7, 8, 9]

const newArr = [1, 2, ...arr];
console.log(newArr); // [1, 2, 7, 8, 9]

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//? copy array

const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//? Join 2 arrays

const allMenus = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(allMenus);

// Iterables: arrays, strings, maps, sets. NOT objects

const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

//? Real world experiment

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// console.log(ingredients);

//? Solution -> iteration to an array of prompts
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
//? Good Solution ->

// restaurant.orderPasta(...ingredients);

// Objets

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);


//* Destructurando un objeto

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//* Default values

const { menu = [], starterMenu: starters = [] } = restaurant;

console.log(menu, starters);

//* Mutating variables

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

//* Nested objects destructuracion

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});


const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//* Destructurando un array

const [x, y, z] = arr;

console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// * Switching between 2 variables - normal way

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//* Switching between 2 variables - destructuring way

[main, secondary] = [secondary, main];
console.log(main, secondary);

//* Recibir 2 valores retornados de una función

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//* Nested array

const nested = [2, 4, [5, 6]];

// Nested Normal way

// const [i, , j] = nested;
// console.log(i, j);

// Nested Destructurando
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

*/
