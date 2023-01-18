// Variables to keep track of score
let playerWinCount = 0;
let computerWinCount = 0;

// Selectors for HTML elements
let rock = document.querySelector(".rock");
let scissors = document.querySelector(".scissors");
let paper = document.querySelector(".paper");
let resultsParent = document.querySelector(".results_parent");

// Selectors to remove the event listeners when score reaches 5
let chooseRock = () => game("rock");
let choosePaper = () => game("paper");
let chooseScissors = () => game("scissors");

// New elements added with javascript
const newElement = document.createElement("div");
const gameScore = document.createElement("div");

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
    newElement.textContent = `You choose ${playerSelection}. Computer choose ${computerSelection}.\nIt's equal!`;
    resultsParent.appendChild(newElement);
    gameScore.textContent = `Player: ${playerWinCount} | Computer: ${computerWinCount}`;
    resultsParent.appendChild(gameScore);

    return playerWinCount, computerWinCount;
  }
  if (playerSelection === "rock" && computerSelection === "scissors") {
    if (playerWinCount < 5) {
      playerWinCount++;
    }

    newElement.textContent = `You choose ${playerSelection}. Computer choose ${computerSelection}.\nYou won this round!`;
    resultsParent.appendChild(newElement);
    gameScore.textContent = `Player: ${playerWinCount} | Computer: ${computerWinCount}`;
    resultsParent.appendChild(gameScore);

    return playerWinCount;
  }
  if (playerSelection === "rock" && computerSelection === "paper") {
    if (computerWinCount < 5) {
      computerWinCount++;
    }
    newElement.textContent = `You choose ${playerSelection}. Computer choose ${computerSelection}.\nYou lost this round!`;
    resultsParent.appendChild(newElement);
    gameScore.textContent = `Player: ${playerWinCount} | Computer: ${computerWinCount}`;
    resultsParent.appendChild(gameScore);

    return computerWinCount;
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    if (playerWinCount < 5) {
      playerWinCount++;
    }
    newElement.textContent = `You choose ${playerSelection}. Computer choose ${computerSelection}.\nYou won this round!`;
    resultsParent.appendChild(newElement);
    gameScore.textContent = `Player: ${playerWinCount} | Computer: ${computerWinCount}`;
    resultsParent.appendChild(gameScore);

    return playerWinCount;
  }
  if (playerSelection === "scissors" && computerSelection === "rock") {
    if (computerWinCount < 5) {
      computerWinCount++;
    }
    newElement.textContent = `You choose ${playerSelection}. Computer choose ${computerSelection}.\nYou lost this round!`;
    resultsParent.appendChild(newElement);
    gameScore.textContent = `Player: ${playerWinCount} | Computer: ${computerWinCount}`;
    resultsParent.appendChild(gameScore);

    return computerWinCount;
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    if (playerWinCount < 5) {
      playerWinCount++;
    }
    newElement.textContent = `You choose ${playerSelection}. Computer choose ${computerSelection}.\nYou won this round!`;
    resultsParent.appendChild(newElement);
    gameScore.textContent = `Player: ${playerWinCount} | Computer: ${computerWinCount}`;
    resultsParent.appendChild(gameScore);

    return playerWinCount;
  }
  if (playerSelection === "paper" && computerSelection === "scissors") {
    if (computerWinCount < 5) {
      computerWinCount++;
    }
    newElement.textContent = `You choose ${playerSelection}. Computer choose ${computerSelection}.\nYou lost this round!`;
    resultsParent.appendChild(newElement);
    gameScore.textContent = `Player: ${playerWinCount} | Computer: ${computerWinCount}`;
    resultsParent.appendChild(gameScore);

    return computerWinCount;
  }
}

function game(input) {
  duelWinner(input);
  if (playerWinCount === 5 && playerWinCount > computerWinCount) {
    gameScore.textContent = `Player wins!`;
  }
  if (computerWinCount === 5 && computerWinCount > playerWinCount) {
    gameScore.textContent = `Computer wins!`;
  }
  // If statemement to remove add event listener
  if (computerWinCount === 5 || playerWinCount === 5) {
    rock.removeEventListener("click", chooseRock);
    paper.removeEventListener("click", choosePaper);
    scissors.removeEventListener("click", chooseScissors);
  }
}

rock.addEventListener("click", chooseRock);
paper.addEventListener("click", choosePaper);
scissors.addEventListener("click", chooseScissors);
