'use strict';

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
