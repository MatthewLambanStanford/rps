// global variables
let humanScore = 0;
let computerScore = 0;

// getting human and computer choices
function getComputerChoice() {
    let selection = ["rock", "paper", "scissors"]
    let computerChoice = getRandomInt(3);
    return selection[computerChoice];1
    
}
function getHumanChoice() {
    let temp = prompt("What's your move? (rock, paper, scissors)"); // "rOcK == rock"
    let humanChoice = temp.toLowerCase(); // either "rock", "paper", "scissors"

    if (["rock", "paper", "scissors"].includes(humanChoice)) {
        return humanChoice;
    } else {
        alert("Invalid choice!");
        return getHumanChoice();
    }
}

// generating computer choice
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

// game logic (playing a round) 
// 2 beats 1, 1 beats 0, 0 beats 2
// rock beats scissors beats paper
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Draw!";
    } else if (humanChoice === "rock") {
        if (computerChoice ==="scissors") {
            humanScore++;
            return "Human wins! Rock beats Scissors!";
        } else {
            computerScore++;
            return "Computer Wins! Paper beats Rock!";
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            computerScore++;
            return "Computer Wins! Scissors beats Paper!";
        } else {
            humanScore++;
            return "Human Wins! Rock beats Scissors!";
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore++;
            return "Human Wins! Paper beats Rock!";
        } else {
            computerScore++;
            return "Computer Wins! Scissors beats Paper!";
        }
    }
}


function playGame() {
    for (let i = 0; i < 1; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        console.log("Round " + (i+1) + ": " + playRound(humanSelection, computerSelection));
    }
    console.log("Final Score: Human " + humanScore + " - Computer " + computerScore);
}

playGame();