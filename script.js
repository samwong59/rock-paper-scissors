const INVALID_INPUT_MESSAGE = "Invalid input, try again!";

let winCount = 0;
let lossCount = 0;

playFiveGameSet();

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
    return INVALID_INPUT_MESSAGE;
  }
  if (playerSelection == computerSelection) {
    return "It's a draw!";
  }
  else if (playerSelection == "Paper" && computerSelection == "Rock") {
    winCount++;
    return "You won!";
  }
  else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    lossCount++;
    return "You lost, sorry.";
  }
  else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    lossCount++;
    return "You lost, sorry.";
  }
  else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    winCount++;
    return "You won!";
  }
  else if (playerSelection == "Rock" && computerSelection == "Paper") {
    lossCount++;
    return "You lost, sorry.";
  }
  else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    winCount++;
    return "You won!";
  }
}

function playFiveGameSet() {
  let keepGoing = true;
  let gameCount = 0;

  while (keepGoing) {
    let userChoice = prompt("Rock, Paper or Scissors?");
    let gameResult = playGame(userChoice, getComputerChoice());
    if (gameResult == INVALID_INPUT_MESSAGE) {
      console.log(INVALID_INPUT_MESSAGE);
      continue;
    }
    console.log(gameResult);
    gameCount++;
    if (gameCount == 5) {
      if (winCount > lossCount) {
        console.log(`You won ${winCount} to ${lossCount}!`);
      }
      else if (winCount < lossCount) {
        console.log(`You lost ${winCount} to ${lossCount}.`);
      }
      else {
        console.log("It's an overall draw!");
      }
      winCount = 0;
      lossCount = 0;
      keepGoing = false;
    }
  }
}