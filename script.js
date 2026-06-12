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


let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");
const winnerDiv = document.querySelector("#winner");

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  if (humanScore === 5 || computerScore === 5) {
    return;
  }

  if (humanChoice === computerChoice) {
    resultsDiv.textContent = `It's a tie! You both chose ${humanChoice}.`;
  } else if (
    humanChoice === "rock" && computerChoice === "scissors" ||
    humanChoice === "paper" && computerChoice === "rock" ||
    humanChoice === "scissors" && computerChoice === "paper"
  ) {
    humanScore++;
    resultsDiv.textContent = `You win this round! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    resultsDiv.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}.`;
  }

  scoreDiv.textContent = `Human score: ${humanScore} | Computer score: ${computerScore}`;

  if (humanScore === 5) {
    winnerDiv.textContent = "Final result: You won the game!";
  } else if (computerScore === 5) {
    winnerDiv.textContent = "Final result: You lost the game!";
  }
}


rockBtn.addEventListener("click", function () {
  playRound("rock");
});

paperBtn.addEventListener("click", function () {
  playRound("paper");
});

scissorsBtn.addEventListener("click", function () {
  playRound("scissors");
});


