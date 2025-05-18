//console.log("Hello World!");

function GetComputerChoice() {
    let cpuChoice = Math.floor((Math.random() * 100)) % 3;
    return cpuChoice; // Returns 0, 1, or 2
}
//console.log(GetComputerChoice());

function GetHumanChoice() {
    let humanChoice = prompt("Choose Rock, Paper, or Scissors");
    humanChoice = humanChoice.toLocaleLowerCase();
    return humanChoice;
}
//console.log(GetHumanChoice());