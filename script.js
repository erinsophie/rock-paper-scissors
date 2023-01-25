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
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "Paper") {
        return "You lose! Paper beats Rock!";
    } else {
        return "Congratulations, you won!";
    }
  }
  

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log("Computer chose: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));










