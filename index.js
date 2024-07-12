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
function getHumanChoice() {
  let input = prompt("Enter rock, paper or scissors");
  return input.toLowerCase();
}

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
function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    let outcome = playRound(computerChoice, humanChoice);
    if (outcome === 1) {
      playerScore++;
    } else if (outcome === 2) {
      computerScore++;
    }
    alert(`Your score: ${playerScore}, computer's score: ${computerScore}`);
  }
  let winner;
  if (playerScore > computerScore) {
    winner = "You";
  } else if (playerScore === computerScore) {
    winner = "No one (draw!)";
  } else {
    winner = "Computer";
  }

  alert(`Game over. Winner: ${winner}`);
}
playGame();
