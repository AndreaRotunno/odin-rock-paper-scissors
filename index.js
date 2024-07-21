let playerScore = 0;
let computerScore = 0;
const label = document.querySelector("h3");
const playerScoreLabel = document.querySelector("#player-score");
const computerScoreLabel = document.querySelector("#computer-score");

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  switch (random) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

document.querySelectorAll(".btn").forEach((btn) =>
  btn.addEventListener("click", function (e) {
    playGame(e.target.id);
    console.log(e.target.id);
  })
);

function playRound(computerChoice, humanChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    return 1;
  } else if (computerChoice === humanChoice) {
    return 0;
  } else {
    return 2;
  }
}

function playGame(humanChoice) {
  let computerChoice = getComputerChoice();
  let outcome = playRound(computerChoice, humanChoice);
  let result;
  if (outcome === 1) {
    playerScore++;
    result = "You win!";
  } else if (outcome === 2) {
    computerScore++;
    result = "You lose!";
  } else {
    result = "Draw!";
  }

  label.textContent = `You chose ${humanChoice}, the computer chose ${computerChoice}. ${result}`;
  playerScoreLabel.textContent = `Player score: ${playerScore}`
  computerScoreLabel.textContent = `Computer score: ${computerScore}`
}
