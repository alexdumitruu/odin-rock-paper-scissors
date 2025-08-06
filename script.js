let humanScore = 0, 
    computerScore = 0;

//console.log(humanScore, computerScore);

//console.log("Hello World!");

function getComputerChoice()
{
    let a = Math.random();
    if (a < (1/3)) return "rock";
    else if (a < (2/3)) return "paper";
    else return "scissors";
}

// console.log(getComputerChoice());
// console.log(getComputerChoice());
// console.log(getComputerChoice());
// console.log(getComputerChoice());
// console.log(getComputerChoice());

function getHumanChoice()
{
    let a = prompt("Choose between rock, paper and scissors.");
    return a;
}

//console.log(getHumanChoice());