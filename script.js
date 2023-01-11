function getComputerChoice() {
  let choices = ["Paper", "Rock", "Scissors"];
  const finalChoice = Math.floor(Math.random() * choices.length);
  console.log(choices[finalChoice]);
  return choices[finalChoice];
}

getComputerChoice();
