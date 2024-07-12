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

  function getHumanChoice() {
    let input = prompt("Enter rock, paper or scissors");
    return input.toLowerCase();
  }
}
let playerScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    alert("You Win");
    playerScore++;
  } else if (computerChoice === humanChoice) {
    alert("Draw!");
  } else {
    alert("You lose!");
    computerScore++;
  }
  alert(`Your score: ${playerScore}, computer's score: ${computerScore}`)
}

for (let i = 0; i < 5; i++) {
  playRound(getComputerChoice(), getHumanChoice())
}