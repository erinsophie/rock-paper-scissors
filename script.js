// The game will play against the computer 
// Create a function called getComputerChoice 
// Function will randomly return rock, paper or scissors
// use Math.random
// Use console.log to test it works

const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

console.log(getComputerChoice())







