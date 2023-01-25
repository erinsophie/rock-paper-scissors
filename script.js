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

function playRound(playerSelection, computerSelection) {
      
     if (playerSelection === "rock" && computerSelection === "Paper") {
        computerScore ++;
        return (`You lose! Paper beats Rock! You: ${playerScore} Computer: ${computerScore}`);
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
};


// function to play 5 rounds 
// playerSelection is rendered case insensitive

function game() {
    for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Choose: Rock, Paper, or Scissors:");
    const computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    playerSelection = playerSelection.toLowerCase()
    console.log("Computer chose: " + computerSelection);
    console.log(result);
    }

    if (playerScore > computerScore) {
        return `Game Over Congratulations! You won! Final Scores: You: ${playerScore} Computer: ${computerScore}`;
    } else if (playerScore < computerScore) {
        return `Game Over Oh no! You lost! Final Scores: You: ${playerScore} Computer: ${computerScore}`;
    } else {
        return `Game Over It's a tie! Try again. Scores: ${playerScore} Computer: ${computerScore}`;
    }
};

console.log(game())


