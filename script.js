// The game will play against the computer 
// Create a function called getComputerChoice 
// Function will randomly return rock, paper or scissors
// use Math.random
// Use console.log to test it works

const choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// write function to play a single round 
// function takes 2 parameters, playerSelection and computerSelection
// it returns a string announcing the winner

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
      
    if (playerSelection === computerSelection) {
        return `It's a tie! Computer chose ${playerSelection}`
      } else if (playerSelection === "rock" && computerSelection === "Paper") {
        return "You lose! Paper beats Rock!";
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        return "You win! Rock beats Scissors"
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
         return "You lose! Rock beats Paper"
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        return "You lose! Scissors cut Paper"
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        return "You win! Scissors cut Paper"
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        return "You lose! Rock beats scissors"
    }
  }
  
const computerSelection = getComputerChoice();
const result = playRound(playerSelection, computerSelection);
console.log("Computer chose: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));










