// define scores at 0

let playerScore = 0;
let computerScore = 0;

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
        computerScore ++;
        return `You lose! Paper beats Rock! You: ${playerScore} Computer: ${computerScore}`;
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        playerScore ++;
        return `You win! Rock beats Scissors You: ${playerScore} Computer: ${computerScore}`;
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
         computerScore ++;
        return `You lose! Rock beats Paper You: ${playerScore} Computer: ${computerScore}`;
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        computerScore ++;
        return `You lose! Scissors cut Paper You: ${playerScore} Computer: ${computerScore}`;
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        playerScore ++;
        return `You win! Scissors cut Paper You: ${playerScore} Computer: ${computerScore}`;
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        computerScore ++;
        return `You lose! Rock beats scissors You: ${playerScore} Computer: ${computerScore}`;
    } else {
        return `It's a tie! You both chose ${playerSelection}. You: ${playerScore} Computer: ${computerScore}`;
    }
  }

const playerSelection = "rock";
const computerSelection = getComputerChoice();
let result = playRound(playerSelection, computerSelection);
console.log("Computer chose: " + computerSelection);
console.log(result);


// function to play 5 rounds 

















