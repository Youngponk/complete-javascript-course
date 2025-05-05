/*

// Quien gana la carrera A y B
// n vueltas
// tiempo inicial que se demora cada corredor en la primera vuelta
// A: terminada la vuelta  5 decrece su rendimiento un 10% y cada vuelta extra decrece 2%
// B: terminada la vuelta 10 decrece su rendimiento  un 15% y cada vuelta extra decrece 1%
// Determinar el tiempo final de cada corredor y quien ganó (existe el empate)
// Se debe entregar el tiempo de cada corredor en cada vuelta

function determinarGanador(n) {
  // Prompts

  let tiempoA = Number(prompt('Indica el tiempo del corredor A: '));
  let tiempoB = Number(prompt('Indica el tiempo del corredor B:'));

  let TiempoAcansado = tiempoA * 1.1;
  let tiempoBcansado = tiempoB * 1.15;

  let tiempoAFinal = tiempoA * 1.12;
  let tiempoBFinal = tiempoA * 1.16;

  let tiempoTotalA = 0;
  let tiempoTotalB = 0;

  let resultado = '';

  // Vueltas
  for (let i = 1; i <= n; i++) {
    // Tiempo de los corredores

    if (i !== 5 && i !== 10 && i < 5) {
      console.log(`Vuelta número: ${i}
        ${tiempoA}s
        ${tiempoB}s
      `);

      tiempoTotalA += tiempoA;
      tiempoTotalB += tiempoB;
    } else if (i === 5) {
      console.log(`Vuelta número: ${i}
        ${TiempoAcansado}s
        ${tiempoB}s
      `);

      tiempoTotalA += TiempoAcansado;
      tiempoTotalB += tiempoB;
    } else if (i > 5 && i < 10) {
      console.log(`Vuelta número: ${i}
        ${tiempoAFinal}s
        ${tiempoB}s
      `);
      tiempoTotalA += tiempoAFinal;
      tiempoTotalB += tiempoB;
    } else if (i === 10) {
      console.log(`Vuelta número: ${i}
        ${tiempoAFinal}s
        ${tiempoBcansado}s
      `);
      tiempoTotalA += tiempoAFinal;
      tiempoTotalB += tiempoBcansado;
    } else if (i > 10) {
      console.log(`Vuelta número: ${i}
        ${tiempoAFinal}s
        ${tiempoBFinal}s
        `);
      tiempoTotalA += tiempoAFinal;
      tiempoTotalB += tiempoBFinal;
    }

    tiempoTotalA += tiempoA;
    tiempoTotalB += tiempoB;
  }

  if (tiempoTotalA < tiempoTotalB) {
    resultado = `El ganador es el corredor A 🏅, con un tiempo de: ${tiempoTotalA}`;
  } else if (tiempoTotalA > tiempoTotalB) {
    resultado = `El ganador es el corredor B 🏅, con un tiempo de: ${tiempoTotalB}`;
  } else {
    resultado = 'Empate';
  }

  // Resultado
  return `--- Resultados ---
  Corredor A - ${tiempoTotalA}s
  Corredor B - ${tiempoTotalB}s
  ${resultado}
  
  `;
}

console.log(determinarGanador(20));




function mostFrequentItemCount(collection) {
  if (collection.length === 0) return 0;

  let pila = [];
  for (let i = 0; i < collection; i++) {
    if (!pila.includes(collection[i])) {
      pila.push(collection[i]);
    } else {
    }
  }
}


const arr = [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9];
console.log(arr);

let count = 0;
let frequentCount = 0;

for (let i = 0; i < collection.length; i++) {
  for (let j = 0; j < collection.length; j++) {
    if (collection[i] === collection[j]) {
      count++;
    }
    
    if (frequentCount < count) {
      frequentCount = count;
    }
  }
  
  count = 0;
}

return frequentCount;


function solution(str) {
  return str.split('').reverse().join('');
}

console.log(solution('niau'));


function solution(number) {
  let sum = 0;
  
  if (number < 0) return 0;
  
  for (let i = number - 1; i > 0; i--) {
    // multiplos de 3 o 5
    if (i % 3 === 0 || i % 5 === 0) {
      console.log(i);
      sum += i;
    }
  }
  
  return sum;
}

console.log(solution(1000));


function squareDigits(num) {
  let cNumber = '';
  
  return Number(cNumber);
}

console.log(squareDigits(9119));





function likes(names) {
  //? Conditions that change for the amount of likes
  
  if (names.length === 0) return `No one likes this`;
  if (names.length === 1) return `${names[0]} likes this`;
  if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
  if (names.length === 3)
  return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  if (names.length >= 4)
  return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}

console.log(likes(['Peter']));
console.log(likes(['Jacob', 'Alex']));
console.log(likes(['Max', 'John', 'Mark']));
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));
console.log(likes([]));


function arrayDiff(a, b) {
  let deleted = [];
  
  if (a.length === 0) return [];
  
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        console.log(i);
        deleted.push(a.splice(i, 1));
      }
    }
  }
  
  return a;
}

console.log(arrayDiff([1, 2], [1])); // [2]
console.log(arrayDiff([1, 2, 2, 2, 3], [2])); // [1, 3]







*/

var isSquare = function (n) {
  number = Math.trunc(Math.sqrt(n));
  if (number * number === n) return true;
  if (number * number !== n) return false;
};
