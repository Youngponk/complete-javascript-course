'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting coditions
const init = function () {
  //? Hide the dice
  diceEl.classList.add('hidden');
  //? Reset every variable
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;

  //? Reset active player
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  //? Reset win mark
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');

  //? Choose the player 0 as starter
  activePlayer = 0;
  document.querySelector('.player--0').classList.add('player--active');
};

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Switch players function

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice function

btnRoll.addEventListener('click', function () {
  if (playing) {
    //? 1. Generating a random dice roll

    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //? 2. Display dice

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //? 3. Check if rolled 1

    if (dice !== 1) {
      //? Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //? Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //? 1. Add current score to active player score
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    console.log(scores);

    //? 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      //? Finish the game
      playing = false;

      //? Hide the dice

      diceEl.classList.add('hidden');

      //? Mark the win player
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      //? Remove active player color
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      console.log(`Player ${activePlayer} Wins!`);
    } else {
      //? Swtich to the next player
      switchPlayer();
    }
  }
});

// New game function

btnNew.addEventListener('click', function () {
  init();
});
