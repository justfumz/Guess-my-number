'use strict';

let secret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//DRY-DO NOT REPEAT yourSelf!
let number = document.querySelector('.number');

//refactors document.querySelector(".message").textContent
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function query() {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no number
  if (!guess) {
    displayMessage('🚫 Not a Number!');

    //when the guess is correct
  } else if (guess == secret) {
    number.textContent = secret;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = 'cadetblue';
    number.style.width = '30rem';
    displayMessage("🎉 That's correct!");
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //when the guess is wrong
  else if (guess != secret) {
    if (score > 1) {
      displayMessage(guess < secret ? '📉 Too Low!' : '📈 Too High!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
}

document.querySelector('.check').addEventListener('click', query);
//When the enter key is pressed
document.querySelector('.guess').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    query();
  }
});

//Reset the value of the game to default
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secret = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  number.textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
});
