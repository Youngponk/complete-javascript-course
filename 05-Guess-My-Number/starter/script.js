'use strict';

/*

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number! 🎉';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

//! Setting up variables

let highScore = 0;
let score = 20;
let secretNumber = 0;

//! Functions

const createSecretNumber = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const setBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const setNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

createSecretNumber();

//! Check function
document.querySelector('.check').addEventListener('click', function () {
  //* Getting the guess number
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No number! 🚫');

    //* Comparing guess whit the actual number, subtract the score for every wrong guess and set the new highscore

    //! Player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number! 🎉');

    displayNumber(secretNumber);

    setBackgroundColor('#60b347');

    setNumberWidth('30rem');

    //Highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // Guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high! 📈' : 'Too low! 📉');
      score--;

      displayScore(score);
    } else {
      displayMessage('You lose the game! 💥');
      displayScore(0);
    }
  }
});

// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

//! Reset function

document.querySelector('.again').addEventListener('click', function () {
  // Score
  score = 20;
  displayScore(score);
  // Input
  document.querySelector('.guess').value = '';
  // Number
  displayNumber('?');
  // Background-color
  setBackgroundColor('#222');
  // Width
  setNumberWidth('15rem');
  // Message
  displayMessage('Start guessing...');
  // Secret number
  createSecretNumber();
});
