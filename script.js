let playerWinCount = 0;
let computerWinCount = 0;

// Function to get the computer choice
function getComputerChoice() {
  let choices = ["paper", "rock", "scissors"];
  const finalChoice = Math.floor(Math.random() * choices.length);
  return choices[finalChoice];
}

// Function to get user input, then compare if to the computer and decide a winner
function duelWinner(playerSelection, computerSelection) {
  playerSelection = prompt(
    "What do you pick? Rock, paper or scissors."
  ).toLowerCase();
  computerSelection = getComputerChoice();
  console.log("You choose " + playerSelection);
  console.log("Computer choose " + computerSelection);

  if (playerSelection === computerSelection) {
    playerWinCount++;
    computerWinCount++;
    return playerWinCount, computerWinCount;
  }
  if (playerSelection === "rock" && computerSelection === "scissors") {
    playerWinCount++;
    return playerWinCount;
  }
  if (playerSelection === "rock" && computerSelection === "paper") {
    computerWinCount++;
    return computerWinCount;
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    playerWinCount++;
    return playerWinCount;
  }
  if (playerSelection === "scissors" && computerSelection === "rock") {
    computerWinCount++;
    return computerWinCount;
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    playerWinCount++;
    return playerWinCount;
  }
  if (playerSelection === "paper" && computerSelection === "scissors") {
    computerWinCount++;
    return computerWinCount;
  }
}

function game() {
  for (let i = 1; i <= 5; i++) {
    duelWinner();
    console.log(i);
  }
}

game();
