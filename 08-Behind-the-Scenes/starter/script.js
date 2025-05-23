'use strict';
/*

function calcAge(birthyear) {
  const age = 2025 - birthyear;
  
  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthyear}`;
    console.log(output);
    
    if (birthyear >= 1981 && birthyear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';
      const str = `Oh, and you're a milleanial, ${firstName}`;
      console.log(str);
      
      function add(a, b) {
        return a + b;
      }
      
      output = 'NEW OUTPUT!';
    }
    console.log(millenial);
    // add(2, 3);
    
    console.log(output);
  }

  printAge();
  
  return age;
}

const firstName = 'Jonas';

calcAge(1994);


//* Variables

console.log(me); // Undefined
console.log(job); // Hoisting works but in a temporal dead zone
console.log(year); // same as job

var me = 'Jonas';
let job = 'Teacher';
const year = 1991;

//* Functions

console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}


console.log(this);

const calcAge = function (birthYear) {
  console.log(2025 - birthYear);
  console.log(this);
};

calcAge(2000);

//! Arrow function dont use this keyword so it should return window.

const calcAgeArrow = birthYear => {
  console.log(2025 - birthYear);
  console.log(this);
};

calcAgeArrow(2000);

const jonas = {
  year: 2000,
  calcAge: function () {
    console.log(this);
    console.log(2025 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;

matilda.calcAge();

const f = jonas.calcAge;


const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
    
    // Solution 1
    
    // const self = this; // self or that
    // const isMillenial = function () {
      //   console.log(self.year >= 1981 && self.year <= 1996);
      //   // console.log(this.year >= 1981 && this.year <= 1996);
      // };
      
      //! Solution 2
      
      const isMillenial = () => {
        console.log(this.year >= 1981 && this.year <= 1996);
      };
      isMillenial();
    },
    
    greet: function () {
      console.log(`Hey ${this.firstName}`);
    },
  };
  
  jonas.greet();
  jonas.calcAge();
  
  // arguments keyword
  
  const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
  };
  
  addExpr(2, 5);
  
  var addArrow = (a, b) => {
    // console.log(arguments);
    return a + b;
  };
  
  addArrow(2, 5, 8);
  
  
  //* Object references in practice (Shallow (superficial) vs. Deep copies(copia profunda) )
  
  const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
  };
  
  // No se crea un nuevo objeto, si no, se hace referencia al objeto principal jessica -> Cualquier cambio cambiará el objetco principal
  
  function marryPerson(originalPerson, newLastName) {
    originalPerson.lastName = newLastName;
    return originalPerson;
  }
  
  const marriedJessica = marryPerson(jessica, 'Davis');
  
  // const marriedJessica = jessica;
  // marriedJessica.lastName = 'Davis';
  
  console.log('Before:', jessica);
  console.log('After:', marriedJessica);
  
  jessica.age = 30;
  
  const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'],
  };
  
  //! Copia superficial (shallow)
  
  const jessicaCopy = { ...jessica2 };
  jessicaCopy.lastName = 'Davis';
  console.log(jessicaCopy);
  
  console.log(jessica, jessicaCopy);
  // jessicaCopy.family.push('Mary');
  // jessicaCopy.family.push('John');
  console.log(jessicaCopy);
  
  console.log('Before:', jessica2);
  console.log('After:', jessicaCopy);
  
  //! Copia profunda (deep copy)
  
  const jessicaClone = structuredClone(jessica2);
  jessicaClone.family.push('Mary');
  jessicaClone.family.push('John');
  
  console.log('Before clone:', jessica2);
  console.log('After clone:', jessicaClone);
  
*/
