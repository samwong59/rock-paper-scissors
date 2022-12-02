const INVALID_INPUT_MESSAGE = "Invalid input, try again!";

let winCount = 0;
let lossCount = 0;

const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");

rockButton.addEventListener("click", playGame);
paperButton.addEventListener("click", playGame);
scissorsButton.addEventListener("click", playGame);

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomChoice = getRandomInt();
  return choices[randomChoice];
}

function getRandomInt() {
  return Math.floor(Math.random() * 3);
}

function playGame(e) {
  const eventButtonTextContent = e.target.textContent
  let playerSelection = (eventButtonTextContent) == "Rock" ? "Rock" : 
    (eventButtonTextContent == "Paper") ? "Paper" : "Scissors";
  const computerSelection = getComputerChoice();
  console.log(`Player chose ${playerSelection} vs ${computerSelection}`);
  if (!(playerSelection == "Rock" || playerSelection == "Paper" || playerSelection == "Scissors")) {
    console.log("INVALID_INPUT_MESSAGE");
  }
  if (playerSelection == computerSelection) {
    console.log("It's a draw!");
  }
  else if (playerSelection == "Paper" && computerSelection == "Rock") {
    winCount++;
    console.log("You won!");
  }
  else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    lossCount++;
    console.log("You lost, sorry.");
  }
  else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    lossCount++;
    console.log("You lost, sorry.");
  }
  else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    winCount++;
    console.log("You won!");
  }
  else if (playerSelection == "Rock" && computerSelection == "Paper") {
    lossCount++;
    console.log("You lost, sorry.");
  }
  else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    winCount++;
    console.log("You won!");
  }
}