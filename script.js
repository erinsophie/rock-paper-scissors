// define scores at 0

let playerScore = 0
let computerScore = 0

// This function generates a random option from the array choices

const choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


// This function plays a single round and returns a string announcing the winner
// playerSelection is rendered case insensitive

function playRound(playerSelection, computerSelection) {
      
     if (playerSelection === "rock" && computerSelection === "Paper") {
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
    } else {
        return `It's a tie! You both chose ${playerSelection}`
    }
  }

  let result = playRound(playerSelection, computerSelection);
console.log("Computer chose: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));


// function to play 5 rounds 

function game() {
    for (let i = 0; i < 5; i++) {
    }
}














