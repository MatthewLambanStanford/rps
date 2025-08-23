// global variables
let humanScore = 0;
let computerScore = 0;

// getting human and computer choices
function getComputerChoice() {
    let selection = ["rock", "paper", "scissors"]
    let computerChoice = getRandomInt(3);
    return selection[computerChoice];
    
}
// REMOVED function getHumanChoice() { 
//     let temp = prompt("What's your move? (rock, paper, scissors)"); // "rOcK == rock"
//     let humanChoice = temp.toLowerCase(); // either "rock", "paper", "scissors"

//     if (["rock", "paper", "scissors"].includes(humanChoice)) {
//         return humanChoice;
//     } else {
//         alert("Invalid choice!");
//         return getHumanChoice();
//     }
// }

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
            humanScore++;
            return "Human Wins! Scissors beats Paper!";
        } else {
            computerScore++;
            return "Computer Wins! Rock beats Scissors!";
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

// buttons for humanSelection


function playGame() {


    const btnRock = document.querySelector("#btnRock");
    btnRock.addEventListener("click", () => {
        const result = playRound("rock", getComputerChoice());
        document.querySelector("#result").textContent = result;
        document.querySelector("#score").textContent = `Score => Human: ${humanScore}, Computer: ${computerScore}`;
    });

    const btnPaper = document.querySelector("#btnPaper");
    btnPaper.addEventListener("click", () => {
        const result = playRound("paper", getComputerChoice());
        document.querySelector("#result").textContent = result;
        document.querySelector("#score").textContent = `Score => Human: ${humanScore}, Computer: ${computerScore}`;
    });
    
    const btnScissors = document.querySelector("#btnScissors");
    btnScissors.addEventListener("click", () => {
        const result = playRound("scissors", getComputerChoice());
        document.querySelector("#result").textContent = result;
        document.querySelector("#score").textContent = `Score => Human: ${humanScore}, Computer: ${computerScore}`;
    });

    // OLD LOGIC
    // for (let i = 0; i < 5; i++) {}

    // let i = 0;
    // let humanChoice = getHumanChoice();
    // let computerChoice = getComputerChoice();
    // let result = playRound(humanChoice, computerChoice);

    // console.log(`Round ${i + 1}:`);
    // console.log(`You chose: ${humanChoice}`);
    // console.log(`Computer chose: ${computerChoice}`);
    // console.log(result);
    // console.log(`Score => Human: ${humanScore}, Computer: ${computerScore}`);
    // console.log("-------------------------");
    // // }

    // if (humanScore > computerScore) {
    //     console.log("🎉 Human wins the game!");
    // } else if (computerScore > humanScore) {
    //     console.log("💻 Computer wins the game!");
    // } else {
    //     console.log("🤝 The game is a draw!");
    // }
}

playGame();