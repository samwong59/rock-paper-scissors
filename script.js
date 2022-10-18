function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomChoice = getRandomInt();
  return choices[randomChoice];
}

function getRandomInt() {
  return Math.floor(Math.random() * 3);
}

function playGame(playerSelection, computerSelection) {
  playerSelection = playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1).toLowerCase();
  console.log(`Player chose ${playerSelection} vs ${computerSelection}`);
  if (!(playerSelection == "Rock" || playerSelection == "Paper" || playerSelection == "Scissors")) {
    return "Invalid input, try again!";
  }
  if (playerSelection == computerSelection) {
    return "It's a draw!";
  }
  else if (playerSelection == "Paper" && computerSelection == "Rock") {
    return "You won!";
  }
  else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    return "You lost, sorry.";
  }
  else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    return "You lost, sorry.";
  }
  else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    return "You won!";
  }
  else if (playerSelection == "Rock" && computerSelection == "Paper") {
    return "You lost, sorry.";
  }
  else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    return "You won!";
  }
}

let userChoice = prompt("Rock, Paper or Scissors?");
let gameResult = playGame(userChoice, getComputerChoice());
console.log(gameResult);