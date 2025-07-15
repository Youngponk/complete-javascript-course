'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/*

//* -------------------------------------------
//* SELECTING, CREATING AND DELETING ELEMENTS *
//* -------------------------------------------

//* Selecting elements

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//* Creating and inserting elements

// .insertAdjacentHTML

const message = document.createElement('div'); // Solo se crea el elemento, no esta en la página aun
message.classList.add('cookie-message'); // Le agregamos un estilo
// message.textContent = 'We use cookies for improved functionality and analytics';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it! </button>';

//? agregar el elemento como primer elemento en el header
// header.prepend(message);
//? agrega el elemento como ultimo elemento en el header
header.append(message);

//? Agregar el elemento varias veces
// header.append(message.cloneNode(true));

//? ADD ELEMENTO COMO HERMANO (mismo nivel)
// Antes del elemento header
// header.before(message);

// Despues del elemento header
// header.after(message);

//* Delete elements

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

//* --------------------------------
//* STYLES, ATTRIBUTES AND CLASSES *
//* --------------------------------

//? Styles

//* Inline styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

//* Leer styles
//* Solo leera los valores que estén en inline-style

console.log(message.style.height);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

//* Costume variables

document.documentElement.style.setProperty('--color-primary', 'orangered');

//? Attributes

const logo = document.querySelector('.nav__logo');
console.log(logo.alt); // Bankist logo
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

console.log(logo.alt); // Beautiful minimalist logo

// Non-standard -> no deberia de existir
console.log(logo.designer); // Undefined
console.log(logo.getAttribute('designer')); // Jonas
logo.setAttribute('company', 'Bankist');

//* Obteniendo atributos

console.log(logo.src); // absoluta -> http://127.0.0.1:5500/13-Advanced-DOM-Bankist/sta
console.log(logo.getAttribute('src')); // relativa -> img/logo.png

//? Diferencia  de obtener el atributo

const link = document.querySelector('.nav__link--btn');

console.log(link.href); // Retorna ruta bruta
console.log(link.getAttribute('href')); // Retorna el valor que tiene href

//* Data attributes
//? data-version-number -> versionNumber
console.log(logo.dataset.versionNumber);

//* Clases

logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes

//! No usar -> sobre-escribe todas las clases existentes
// logo.className = 'jonas';

*/

//* --------------------------------
//* IMPLEMENTING SMOOTH SCROLLING  *
//* --------------------------------

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  //? Posición del elemento section1
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  //? Posición del elemento que se clickea (e)
  console.log(e.target.getBoundingClientRect());

  //? Posición actual de la pantalla cuando se clickea el btnScrollTo (basado en el viewport actual)
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  //? Width y Height de la ventana cuando se clickea el elemento
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //* Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  //? oldway

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  //? new way

  section1.scrollIntoView({ behavior: 'smooth' });
});

/*

//* ------------------------------------
//* TYPE OF EVENTS AND EVENT HANDLERS  *
//* ------------------------------------

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');

  // h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = alertH1;

*/

//* -------------------------------------------
//* EVENT PROPAGATION: BUBBLING AND CAPTURING  *
//* -------------------------------------------

// rgb(255,255,255);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});
