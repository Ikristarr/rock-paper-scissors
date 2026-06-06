function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

console.log(getComputerChoice());

function getHumanChoice() {
  const choice = prompt("Choose rock, paper, or scissors:");
  return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;