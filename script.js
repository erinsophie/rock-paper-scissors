// SCORES

let playerScore = 0;
let computerScore = 0;

//DOM NODES

const optionBtns = document.querySelectorAll('div.option-btns button');
const playerPoints = document.querySelector('.player-points');
const computerPoints = document.querySelector('.computer-points');
const displayMsg = document.querySelector('.display-message');
const compChose = document.querySelector('.computer-chose')
const playAgainBtn = document.querySelector('.play-again-btn')

// EVENT LISTENERS

optionBtns.forEach(button => button.addEventListener('click', getPlayerChoice));
playAgainBtn.addEventListener('click', playAgain);

// COMPUTER CHOICE 

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"]
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// PLAYER CHOICE 

function getPlayerChoice(e) {
    let playerSelection = e.target.textContent.toLowerCase();
    let computerSelection = getComputerChoice();
    compChose.textContent = `Computer chose: ${computerSelection}`;
    playRound(playerSelection, computerSelection);
}

// GAME 

 function playRound(playerSelection, computerSelection) {    
    if ((playerSelection === "rock" && computerSelection === "Paper") ||
        (playerSelection === "paper" && computerSelection === "Scissors") ||
        (playerSelection === "scissors" && computerSelection === "Rock")) {
            computerScore++;
            displayMsg.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    if ((playerSelection === "rock" && computerSelection === "Scissors") ||
        (playerSelection === "paper" && computerSelection === "Rock") ||
        (playerSelection === "scissors" && computerSelection === "Paper")) {
             playerScore++;
             displayMsg.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
     } 
    if (playerSelection === computerSelection.toLowerCase()) {
        displayMsg.textContent = `It's a tie! You both chose ${playerSelection}`
       }       
 updateScore();
}

// UPDATE SCORE

function updateScore() {
    playerPoints.textContent = `Player: ${playerScore}`;
    computerPoints.textContent = `Computer: ${computerScore}`;
    if (playerScore === 5 && computerScore < 5) {
        displayMsg.textContent = "YOU WON!";
        endGame();
    } 
    if (computerScore === 5 && playerScore <  5) {
        displayMsg.textContent = "GAME OVER, YOU LOST!";
        endGame();
    } 
  }

// END GAME 

function endGame() {
    optionBtns.forEach(button => { button.removeEventListener('click', getPlayerChoice)});
}

// RESTART GAME 

function playAgain() {
    optionBtns.forEach(button => button.addEventListener('click', getPlayerChoice));
    playerScore = 0;
    computerScore = 0;
    playerPoints.textContent = `Player: ${playerScore}`;
    computerPoints.textContent = `Computer: ${computerScore}`;
    displayMsg.textContent = "";
    compChose.textContent = "";
}



