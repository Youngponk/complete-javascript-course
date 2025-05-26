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
//* Optional Chaining

console.log(restaurant.openingHours.mon);

/*
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
