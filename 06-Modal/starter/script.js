'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//! Open modal function

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Función para que al presionar un botón se quite una clase de un elemento
//? Se recorre el array de botones y se le quita el estilo hidden al modal y al overlay para que se hagan visibles

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// Función para cerrar el modal
//? se agregan los estilos hidden

//! Close modal function

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//Evento de key para cerrar el modal

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
