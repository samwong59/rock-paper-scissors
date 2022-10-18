function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomChoice = getRandomInt();
  console.log(randomChoice);
  return choices[randomChoice];
}

function getRandomInt() {
  return Math.floor(Math.random() * 3);
}

let computerChoice = getComputerChoice();
console.log(computerChoice);