"use strict";

let secret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //when there is no number
  if (!guess) {
    document.querySelector(".message").textContent = "🚫 Not a Number!";

    //when player wins
  } else if (guess == secret) {
    document.querySelector(".number").textContent = secret;
    document.querySelector("body").style.backgroundColor = "cadetblue";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".message").textContent = "🎉 That's correct!";
    score++;
    document.querySelector(".score").textContent = score;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //when guess is too low
  } else if (guess < secret) {
    if (score > 1) {
      document.querySelector(".message").textContent = "❌ Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }

    //When guess is too high
  } else if (guess > secret) {
    if (score > 1) {
      document.querySelector(".message").textContent = "❌ Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

//Reset the value of the game to default
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secret = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
