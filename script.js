"use strict";

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //when there is no number
  if (!guess) {
    document.querySelector(".message").textContent = "🚫 No Number!";
    //when player wins
  } else {
    const secret = (document.querySelector(".number").textContent =
      Math.trunc(Math.random() * 3) + 1);
    if (guess == secret) {
      document.body.style.backgroundColor = "cadetblue";
      document.querySelector(".message").textContent = "🎉 That's correct!";
      score++;
      document.querySelector(".score").textContent = score;
    } else if (guess < secret) {
      if (score > 1) {
        document.querySelector(".message").textContent = "❌ Too Low!";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent =
          "💥 You lost the game!";
        document.querySelector(".score").textContent = 0;
      }
    } else if (guess > secret) {
      if (score > 1) {
        document.querySelector(".message").textContent = "❌ Too High!";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent =
          "💥 You lost the game!";
        document.querySelector(".score").textContent = 0;
      }
    }
  }
});
