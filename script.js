let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

document
  .querySelector(".first")
  .setAttribute("src", `images/dice${randomNumber1}.png`);

document
  .querySelector(".second")
  .setAttribute("src", `images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2) {
  document.querySelector(".title").textContent = "Player 1 Wins 🏁";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector(".title").textContent = "🏁 Player 2 Wins";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector(".title").textContent = "Draw💁";
}
