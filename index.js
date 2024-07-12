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

  function getHumanChoice(){
    let input = prompt("Enter rock, paper or scissors");
    return input.toLowerCase();
  }
}

