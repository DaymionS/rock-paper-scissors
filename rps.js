//console.log("Hello World!");

function GetComputerChoice() {
    let cpuChoice = Math.floor((Math.random() * 100)) % 3;
    return cpuChoice; // Returns 0, 1, or 2
}
//console.log(GetComputerChoice());

function GetHumanChoice() {
    let playerChoice = prompt("Choose Rock, Paper, or Scissors");
    playerChoice = playerChoice.toLocaleLowerCase();
    return playerChoice;
}
//console.log(GetHumanChoice());

let humanScore = 0; 
let computerScore = 0;
//console.log(humanScore, computerScore);

function playRound(humanChoice, computerChoice) {
    switch(computerChoice) {
        case 0:
            switch(humanChoice) {
                case "rock":
                    console.log("Draw! Rock equals Rock!");
                    break;
                case "paper":
                    console.log("You Win! Paper beats Rock!");
                    humanScore++;
                    break;
                case "scissors":
                    console.log("You Lose! Rock beats Scissors!");
                    computerScore++;
                    break;
            }
            break;
        case 1:
            switch(humanChoice) {
                case "rock":
                    console.log("You Lose! Paper beats Rock!");
                    computerScore++;
                    break;
                case "paper":
                    console.log("Draw! Paper equals Paper!");
                    break;
                case "scissors":
                    console.log("You Win! Scissors beats Paper!");
                    humanScore++;
                    break;
            }
            break;
        case 2:
            switch(humanChoice) {
                case "rock":
                    console.log("You Win! Rock beats Scissors!");
                    humanScore++;
                    break;
                case "paper":
                    console.log("You Lose! Scissors beats Paper!");
                    computerScore++;
                    break;
                case "scissors":
                    console.log("Draw! Scissors equals Scissors");
                    break;
            }
            break;
    }
    console.log(`Player: ${humanScore} CPU: ${computerScore}`);
}

const humanSelection = GetHumanChoice();
const computerSelection = GetComputerChoice();

playRound(humanSelection, computerSelection);