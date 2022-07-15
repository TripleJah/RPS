const moves = ['rock', 'paper', 'scissors'];
let playerWins = 0;
let compWins = 0;
let ties = 0;

function compMove() {
    //randomly selects comp move
    return moves[Math.floor(Math.random() * moves.length)];
}

function playerMove() {
    //prompts, asks for a choice
    //returns choice
    let input = prompt('Rock, Paper or Scissors?');
    input = input.toLowerCase();
    return input;
}

function playRound() {
    //determines the winner 
    //declares and returns winner
    compChoice = compMove();
    playerChoice = playerMove();

    if (playerChoice == compChoice) {
        alert('It\'s a tie');
        return ties += 1;
    } else if (playerChoice == 'rock' && compChoice == 'scissors') {
        alert('You win! Rock beats Scissors!');
        return playerWins += 1;
    } else if (playerChoice == 'paper' && compChoice == 'rock') {
        alert('You win! Paper beats Rock');
        return playerWins += 1;
    } else if (playerChoice == 'scissors' && compChoice == 'paper') {
        alert('You win! Scissors beats Paper');
        return playerWins += 1;
    } else if (playerChoice == 'rock' && compChoice == 'paper') {
        alert('You lose! Paper beats Rock!');
        return compWins += 1;
    } else if (playerChoice == 'paper' && compChoice == 'scissors') {
        alert('You lose! Scissors beats Paper!');
        return compWins += 1;
    } else if (playerChoice == 'scissors' && compChoice == 'rock') {
        alert('You lose! Rock beats Scissors!');
        return compWins += 1;
    }
}

function game() {
    //recieves Round winner
    //keeps tally of wins/losses
    //best of 5 rounds, declares victor after three wins
    for (let rounds = 0; rounds < 5; rounds++) {
        playRound()
    }
    console.log('Player Wins: ', playerWins);
    console.log('Computer Wins: ', compWins);
    console.log('Ties: ', ties);

    if (playerWins == compWins) {
        console.log('IT\'S A TIE!');
    } else if (playerWins > compWins) {
        console.log('YOU WIN!!!!');
    } else {
        console.log('YOU LOSE!');
    }
}

game();



























/*const CHOICES = ["rock", "paper", "scissors"]

function game() {
    //begins the game and keeps log of individual round winners, 
    //also declares the victor in a best of five rounds
    //all in console
    playRound();
}

function playRound() {
    //takes input of first two functions and determines the victor or delcares a tie
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
}

function getPlayerChoice() {
    //prompts the user for a choice, stores input
    let input = prompt("Rock, Paper or Scissors? ");
    while (input == null || undefined) {
        input = prompt("Rock, Paper or Scissors? ");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    if (check == true) {
        console.log(input);
    }
    return input;

}

function getComputerChoice() {
    //determines the random PC Choice
    return CHOICES[Math.floor(Math.random() * CHOICES.length)]
}



function validateInput(choice) {
    if (CHOICES.includes(choice)) {
        return true;
    }
    return false;
}

game();





/*console.log("test")

//determine the random computer choice
function getComputerChoice() {
    num = Math.floor(Math.random() * 100);
    computerChoice = null;
    if (num <= 33) {
        computerChoice = "rock";
    } else if (num > 66) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }
    return computerChoice;
}

playerChoice = getPlayerChoice();

//ask the human for their choice
function getPlayerChoice() {
    let playerChoice = prompt('Rock, Paper or Scissors? ').toLowerCase();
    return playerChoice;
}

function playRound(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        alert('It\'s a tie!');
    if (computerChoice === 'rock' && playerChoice === 'paper') {
        alert('You win! Paper beats Rock!!');
    } else if (computerChoice === 'paper' && playerChoice === 'scissors') {
        alert('You win! Scissors beat paper!');
    } else if (computerChoice === 'scissors' && playerChoice === 'rock') {
        alert('You win! Rock beats Scissors!')
    } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
        alert('You lose! Rock beats Scissors!')
    } else if (computerChoice === 'paper' && playerChoice === 'rock') {
        alert('You lose! Paper beats Rock!')
    } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
        alert('You lose! Scissors beat Paper!')
    }
}
*/