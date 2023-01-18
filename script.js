let playerWinCount = 0;
let computerWinCount = 0;
let rock = document.querySelector(".rock");
let scissors = document.querySelector(".scissors");
let paper = document.querySelector(".paper");
let resultsParent = document.querySelector(".results_parent");

const newElement = document.createElement("div");
newElement.classList.add("results");

// Function to get the computer choice
function getComputerChoice() {
  let choices = ["paper", "rock", "scissors"];
  const finalChoice = Math.floor(Math.random() * choices.length);
  return choices[finalChoice];
}

// Function to get user input, then compare if to the computer and decide a winner
function duelWinner(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    console.log(
      `You choose ${playerSelection}. Computer choose ${computerSelection}.\nIt's equal!`
    );
    newElement.textContent = `You choose ${playerSelection}. Computer choose ${computerSelection}.\nIt's equal!`;
    resultsParent.appendChild(newElement);
    return playerWinCount, computerWinCount;
  }
  if (playerSelection === "rock" && computerSelection === "scissors") {
    playerWinCount++;
    console.log(
      `You choose ${playerSelection}. Computer choose ${computerSelection}.\nYou won this round!`
    );
    newElement.textContent = `You choose ${playerSelection}. Computer choose ${computerSelection}.\nYou won this round!`;
    resultsParent.appendChild(newElement);

    return playerWinCount;
  }
  if (playerSelection === "rock" && computerSelection === "paper") {
    computerWinCount++;
    console.log(
      `You choose ${playerSelection}. Computer choose ${computerSelection}.\nYou lost this round!`
    );
    newElement.textContent = `You choose ${playerSelection}. Computer choose ${computerSelection}.\nYou lost this round!`;
    resultsParent.appendChild(newElement);

    return computerWinCount;
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    playerWinCount++;
    console.log(
      `You choose ${playerSelection}. Computer choose ${computerSelection}.\nYou won this round!`
    );
    newElement.textContent = `You choose ${playerSelection}. Computer choose ${computerSelection}.\nYou won this round!`;
    resultsParent.appendChild(newElement);

    return playerWinCount;
  }
  if (playerSelection === "scissors" && computerSelection === "rock") {
    computerWinCount++;
    console.log(
      `You choose ${playerSelection}. Computer choose ${computerSelection}.\nYou lost this round!`
    );
    newElement.textContent = `You choose ${playerSelection}. Computer choose ${computerSelection}.\nYou lost this round!`;
    resultsParent.appendChild(newElement);

    return computerWinCount;
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    playerWinCount++;
    console.log(
      `You choose ${playerSelection}. Computer choose ${computerSelection}.\nYou won this round!`
    );
    newElement.textContent = `You choose ${playerSelection}. Computer choose ${computerSelection}.\nYou won this round!`;
    resultsParent.appendChild(newElement);

    return playerWinCount;
  }
  if (playerSelection === "paper" && computerSelection === "scissors") {
    computerWinCount++;
    console.log(
      `You choose ${playerSelection}. Computer choose ${computerSelection}.\nYou lost this round!`
    );
    newElement.textContent = `You choose ${playerSelection}. Computer choose ${computerSelection}.\nYou lost this round!`;
    resultsParent.appendChild(newElement);

    return computerWinCount;
  }
}

function game(input) {
  duelWinner(input);
  if (playerWinCount > computerWinCount) {
    console.log("Player wins!");
  }
  if (computerWinCount > playerWinCount) {
    console.log("Computer wins!");
  }
  if (computerWinCount === playerWinCount) {
    console.log("It's equal!");
  }
}

rock.addEventListener("click", () => game("rock"));
paper.addEventListener("click", () => game("paper"));
scissors.addEventListener("click", () => game("scissors"));
