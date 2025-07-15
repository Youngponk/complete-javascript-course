'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
///////////////////////////////////////
// Modal window

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

//! --------------------------------
//! IMPLEMENTING SMOOTH SCROLLING  *
//! --------------------------------

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

//! -----------------------------------------------
//! EVENT DELEGATION: IMPLEMENTING PAGE NAVIGATION *
//! -----------------------------------------------

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     //? Previene que el tag a se mueva a su href #section--1
//     e.preventDefault();

//     const id = this.getAttribute('href');
//     console.log(id);

//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//? 1. Add event listener to common parent element
//? 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  //? Matching strategy

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//! ---------------------------
//! MAKING A TABBED COMPONENT *
//! ---------------------------

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  //? Matching strategy
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  //? Guard clause
  if (!clicked) return;

  //?Quitando el active a los demas botones
  //? Quitando el active a los demas contenido
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  //? Agregando la clase de active al boton que se clickea
  clicked.classList.add('operations__tab--active');

  //? Activando el contenido del boton seleccionado usando el data content
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
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
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this); // true

  // Stop Propagation

  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});


//* -----------------
//* DOM TRAVERSING  *
//* -----------------

const h1 = document.querySelector('h1');

//? Going downwards: child
console.log(h1.querySelectorAll('.highlight')); // NodeList(2) [span.highlight, span.highlight]
console.log(h1.childNodes); // NodeList(9) [text, comment, text, span.highlight, text, br, text, span.highlight, text]
console.log(h1.children); // HTMLCollection(3) [span.highlight, br, span.highlight]
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

//? Going upwards: parents

console.log(h1.parentNode); // div.header__title
console.log(h1.parentElement); // div.header__title

h1.closest('.header').style.background = 'var(--gradient-secondary)';

h1.closest('h1').style.background = 'var(--gradient-primary)';

//? Going sideways: hermanos

console.log(h1.previousElementSibling); // Null -> no tiene un hermano antes
console.log(h1.nextElementSibling); // h4

console.log(h1.previousSibling); // #text
console.log(h1.nextSibling); // #text

//? Tricks

console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) {
    el.style.transform = 'scale(0.5)';
  }
});

*/
