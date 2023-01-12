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

  if (playerSelection === computerSelection) {
    console.log(`You choose ${playerSelection}. Computer choose ${computerSelection}.\nIt's equal!` );
    return playerWinCount, computerWinCount;
  }
  if (playerSelection === "rock" && computerSelection === "scissors") {
    playerWinCount++;
    console.log(`You choose ${playerSelection}. Computer choose ${computerSelection}.\nYou won this round!` );
    return playerWinCount;
  }
  if (playerSelection === "rock" && computerSelection === "paper") {
    computerWinCount++;
    console.log(`You choose ${playerSelection}. Computer choose ${computerSelection}.\nYou lost this round!` );
    return computerWinCount;
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    playerWinCount++;
    console.log(`You choose ${playerSelection}. Computer choose ${computerSelection}.\nYou won this round!` );
    return playerWinCount;
  }
  if (playerSelection === "scissors" && computerSelection === "rock") {
    computerWinCount++;
    console.log(`You choose ${playerSelection}. Computer choose ${computerSelection}.\nYou lost this round!` );
    return computerWinCount;
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    playerWinCount++;
    console.log(`You choose ${playerSelection}. Computer choose ${computerSelection}.\nYou won this round!` );
    return playerWinCount;
  }
  if (playerSelection === "paper" && computerSelection === "scissors") {
    computerWinCount++;
    console.log(`You choose ${playerSelection}. Computer choose ${computerSelection}.\nYou lost this round!` );
    return computerWinCount;
  }
}

function game() {
  for (let i = 1; i <= 5; i++) {
    duelWinner();
  }
  if (playerWinCount > computerWinCount) {
    console.log("Player wins!")
  }
  if (computerWinCount > playerWinCount ) {
    console.log("Computer wins!");
  } 
  if (computerWinCount === playerWinCount){
    console.log("It's equal!");
  }
}

game();
