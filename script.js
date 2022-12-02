const INVALID_INPUT_MESSAGE = "Invalid input, try again!";

let winCount = 0;
let lossCount = 0;

const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");
const result = document.querySelector("#result");
const score = document.querySelector("#score");
const fiveGameResult = document.querySelector("#fiveGameResult");

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
  fiveGameResult.textContent = "";

  const eventButtonTextContent = e.target.textContent
  let playerSelection = (eventButtonTextContent) == "Rock" ? "Rock" : 
    (eventButtonTextContent == "Paper") ? "Paper" : "Scissors";
  const computerSelection = getComputerChoice();
  console.log(`Player chose ${playerSelection} vs ${computerSelection}`);
  if (playerSelection == computerSelection) {
    result.textContent = "It's a draw!";
  }
  else if (playerSelection == "Paper" && computerSelection == "Rock") {
    winCount++;
    result.textContent = "You won!";
  }
  else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    lossCount++;
    result.textContent = "You lost.";
  }
  else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    lossCount++;
    result.textContent = "You lost.";
  }
  else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    winCount++;
    result.textContent = "You won!";
  }
  else if (playerSelection == "Rock" && computerSelection == "Paper") {
    lossCount++;
    result.textContent = "You lost.";
  }
  else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    winCount++;
    result.textContent = "You won!";
  }
  score.textContent = `${winCount} - ${lossCount}`;
  if (winCount == 5) {
    fiveGameResult.textContent = "You won the overall game!";
    lossCount = 0;
    winCount = 0;
  }
  if (lossCount == 5) {
    fiveGameResult.textContent = "The computer won the overall game. Try again.";
    lossCount = 0;
    winCount = 0;
  }
}