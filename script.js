'use strict';
let roll = document.querySelector('.btn--roll');
let holdd = document.getElementById('holt');
let neww = document.querySelector(`.btn--new`);
let current1 = document.querySelector('#current--0');
let current2 = document.querySelector('#current--1');
let dice = document.querySelector('.dice');
let w = window.innerWidth;
let restart = document.querySelector(`#restart`);
let close = document.querySelector(`#restart`);
let activePlayer = document.querySelector(`#actone`);
let secondActive = document.querySelector(`#acttwo`);
let currentsco1 = document.querySelector(`#playone`);
currentsco1.value = 0;
let currentsco2 = document.querySelector(`#playtwo`);
currentsco2.value = 0;
let score1 = document.querySelector(`#sco1`);
score1.value = 0;
let score2 = document.querySelector(`#sco2`);
score2.value = 0;
let playerOne = document.querySelector(`#nameOne`);
let playerTwo = document.querySelector(`#playerTwo`);
let box = document.querySelector(`.boxx`);

dice.classList.add(`hidden`);

jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 576 && ww > 480) {
      $(`#restart`).removeClass(`btn--new`);
      $('#restart').addClass('btn--neww');
      $(`#Rdyse`).removeClass(`btn--roll`);
      $(`#Rdyse`).removeClass(`btn--rolled`);
      $(`#Rdyse`).addClass(`btn--rolls`);
      $(`#holt`).removeClass(`btn--hold`);
      $(`#holt`).removeClass(`btn--holdss`);
      $(`#holt`).removeClass(`btn--holdsss`);
      $(`#holt`).removeClass(`btn--holds`);
      $(`#holt`).addClass(`btn--holdd`);
      $(`#dyse`).removeClass(`dice`);
      $(`#dyse`).addClass(`dicee`);
      $(`.sco`).removeClass(`score`);
      $(`.sco`).addClass(`scoree`);
      $(`.player1`).addClass(`down`);
    } else if (ww >= 576) {
      $(`#restart`).removeClass(`btn--neww`);
      $('#restart').addClass('btn--new');
      $(`#Rdyse`).removeClass(`btn--rolls`);
      $(`#Rdyse`).removeClass(`btn--rolled`);
      $(`#Rdyse`).addClass(`btn--roll`);
      $(`#holt`).removeClass(`btn--holdss`);
      $(`#holt`).removeClass(`btn--holdsss`);
      $(`#holt`).removeClass(`btn--holds`);
      $(`#holt`).removeClass(`btn--holdd`);
      $(`#holt`).addClass(`btn--hold`);
      $(`#dyse`).removeClass(`dicee`);
      $(`#dyse`).addClass(`dice`);
      $(`.sco`).removeClass(`scoree`);
      $(`.sco`).addClass(`score`);
      $(`.player1`).removeClass(`down`);
    } else if (ww <= 370) {
      $(`#restart`).removeClass(`btn--new`);
      $('#restart').addClass('btn--neww');
      $(`#Rdyse`).removeClass(`btn--rolls`);
      $(`#Rdyse`).addClass(`btn--rolled`);
      $(`#holt`).removeClass(`btn--holdsss`);
      $(`#holt`).removeClass(`btn--holdd`);
      $(`#holt`).removeClass(`btn--holdss`);
      $(`#holt`).addClass(`btn--holds`);
      $(`#dyse`).removeClass(`dice`);
      $(`#dyse`).addClass(`dicee`);
    } else if (ww <= 480 && ww > 440) {
      $(`#restart`).removeClass(`btn--new`);
      $('#restart').addClass('btn--neww');
      $(`#Rdyse`).removeClass(`btn--rolls`);
      $(`#Rdyse`).addClass(`btn--rolled`);
      $(`#holt`).removeClass(`btn--holdsss`);
      $(`#holt`).removeClass(`btn--holdd`);
      $(`#holt`).addClass(`btn--holdss`);
      $(`#dyse`).removeClass(`dice`);
      $(`#dyse`).addClass(`dicee`);
    } else if (ww <= 440 && ww > 370) {
      $(`#restart`).removeClass(`btn--new`);
      $('#restart').addClass('btn--neww');
      $(`#Rdyse`).removeClass(`btn--rolls`);
      $(`#Rdyse`).addClass(`btn--rolled`);
      $(`#holt`).removeClass(`btn--holds`);
      $(`#holt`).addClass(`btn--holdsss`);
      $(`#dyse`).removeClass(`dice`);
      $(`#dyse`).addClass(`dicee`);
    }
  };
  $(window).resize(function() {
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});

holt.addEventListener(`click`, function() {
  if (score1.value <= 100 && score2.value <= 100) {
    if (
      activePlayer.className ===
      'col-sm-6 col-lg-6 d-flex justify-content-center player--active'
    ) {
      score1.value = score1.value + currentsco1.value;
      if (score1.value >= 100) {
        score1.textContent = score1.value;
        activePlayer.classList.add(`player--winner`);
        playerOne.style.color = `#c7365f`;
      } else {
        activePlayer.classList.remove(`player--active`);
        secondActive.classList.add(`player--active`);

        score1.textContent = score1.value;

        currentsco1.textContent = 0;
        currentsco1.value = 0;
      }
    } else if (
      activePlayer.className !==
      'col-sm-6 col-lg-6 d-flex justify-content-center player--active'
    ) {
      score2.value = score2.value + currentsco2.value;
      if (score2.value >= 100) {
        score2.value = score2.value + currentsco2.value;
        score2.textContent = score2.value;
        secondActive.classList.add(`player--winner`);
        playerTwo.style.color = `#c7365f`;
      }
      secondActive.classList.remove(`player--active`);
      activePlayer.classList.add(`player--active`);

      score2.textContent = score2.value;
      currentsco2.value = 0;
      currentsco2.textContent = 0;
    }
  }
});

roll.addEventListener(`click`, function() {
  let randomNumber = Math.trunc(Math.random() * 6) + 1;

  if (randomNumber == 1) {
    if (
      activePlayer.className ===
      'col-sm-6 col-lg-6 d-flex justify-content-center player--active'
    ) {
      if (score1.value < 100 && score2.value < 100) {
        dice.classList.remove(`hidden`);
        dice.src = `dice-${randomNumber}.png`;
        activePlayer.classList.remove(`player--active`);
        secondActive.classList.add(`player--active`);
        score1.value = score1.value + 0;
        score1.textContent = score1.value;

        currentsco1.textContent = 0;
        currentsco1.value = 0;
      }
    } else if (
      activePlayer.className !==
      'col-sm-6 col-lg-6 d-flex justify-content-center player--active'
    ) {
      if (score1.value < 100 && score2.value < 100) {
        dice.classList.remove(`hidden`);
        dice.src = `dice-${randomNumber}.png`;
        secondActive.classList.remove(`player--active`);
        activePlayer.classList.add(`player--active`);
        score2.value = score2.value + 0;
        score2.textContent = score2.value;
        currentsco2.value = 0;
        currentsco2.textContent = 0;
      }
    }
  } else {
    if (
      activePlayer.className ===
      'col-sm-6 col-lg-6 d-flex justify-content-center player--active'
    ) {
      if (score1.value < 100 && score2.value < 100) {
        dice.classList.remove(`hidden`);
        dice.src = `dice-${randomNumber}.png`;
        currentsco1.value = currentsco1.value + randomNumber;
        currentsco1.textContent = currentsco1.value;
      }
    } else {
      if (score1.value < 100 && score2.value < 100) {
        dice.classList.remove(`hidden`);
        dice.src = `dice-${randomNumber}.png`;
        currentsco2.value = currentsco2.value + randomNumber;
        currentsco2.textContent = currentsco2.value;
      }
    }
  }
});

restart.addEventListener(`click`, function() {
  score1.value = 0;
  score1.textContent = 0;
  score2.value = 0;
  score2.textContent = 0;
  currentsco1.textContent = 0;
  currentsco1.value = 0;
  currentsco2.value = 0;
  currentsco2.textContent = 0;
  activePlayer.classList.remove(`player--winner`);
  activePlayer.classList.add(`player--active`);
  box.classList.add(`recol`);
  secondActive.classList.remove(`player--winner`);
  secondActive.classList.remove(`player--active`);
  activePlayer.classList.add(`player--active`);
  dice.classList.add(`hidden`);
  playerOne.style.color = `black`;
  playerTwo.style.color = `black`;
});
