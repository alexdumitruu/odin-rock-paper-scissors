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

function playRound(humanChoice, computerChoice)
{
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice)
    {
        console.log(`Draw! You both chose ${humanChoice}.`);
    }
    else if (humanChoice === "rock")
    {
        if (computerChoice === "scissors")
        {
            console.log(`You win! Rock beats scissors.`);
            humanScore++;
        } 
        else 
        {
            console.log(`You lose! Paper beats rock.`);
            computerScore++;
        }
    }
    else if (humanChoice === "paper")
    {
        if (computerChoice === "rock") 
        {
            console.log(`You win! Paper beats rock.`);
            humanScore++;
        }
        else
        {
            console.log(`You lose! Scissors beat paper.`);
            computerScore++;
        }
    }
    else
    {
        if (computerChoice === "paper")
        {
            console.log(`You win! Scissors beat paper.`);
            humanScore++;
        }
        else
        {
            console.log(`You lose! Rock beats scissors.`);
            computerScore++;
        }
    }
}