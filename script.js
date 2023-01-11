function getComputerChoice() {
  let choices = ["paper", "rock", "scissors"];
  const finalChoice = Math.floor(Math.random() * choices.length);
  return choices[finalChoice];
}

function duelWinner(playerSelection, computerSelection) {
  playerSelection = prompt(
    "What do you pick? Rock, paper or scissors."
  ).toLowerCase();
  computerSelection = getComputerChoice();
  let duelResult = null;
  console.log(playerSelection);
  console.log(computerSelection);

  if (playerSelection === computerSelection) {
    duelResult = "Equal!";
    console.log(duelResult);
    return duelResult;
  }
  if (playerSelection === "rock" && computerSelection === "scissors") {
    duelResult = "Rock beats scissors. You win!";
    console.log(duelResult);
    return duelResult;
  }
  if (playerSelection === "rock" && computerSelection === "paper") {
    duelResult = "Rock loses against paper. You lose!";
    console.log(duelResult);
    return duelResult;
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    duelResult = "Scissors beats paper. You win!";
    console.log(duelResult);
    return duelResult;
  }
  if (playerSelection === "scissors" && computerSelection === "rock") {
    duelResult = "Scissors lose against rock. You lose!";
    console.log(duelResult);
    return duelResult;
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    duelResult = "Paper beats rock. You win!";
    console.log(duelResult);
    return duelResult;
  }
  if (playerSelection === "paper" && computerSelection === "scissors") {
    duelResult = "Paper loses against scissors. You lose!";
    console.log(duelResult);
    return duelResult;
  }
}

duelWinner();
