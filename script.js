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

function playGame() {
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    humanChoice === "rock" && computerChoice === "scissors" ||
    humanChoice === "paper" && computerChoice === "rock" ||
    humanChoice === "scissors" && computerChoice === "paper"
  ) {
    humanScore++;
    console.log("You win! " + humanChoice + " beats " + computerChoice);
  } else {
    computerScore++;
    console.log("You lose! " + computerChoice + " beats " + humanChoice);
  }

  console.log("Human score: " + humanScore);
  console.log("Computer score: " + computerScore);
}

playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());

if (humanScore > computerScore) {
  console.log("Final result: You won the game!");
} else if (computerScore > humanScore) {
  console.log("Final result: You lost the game!");
} else {
  console.log("Final result: The game is a tie!");
}

}

playGame();
