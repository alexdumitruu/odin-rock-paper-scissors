let humanScore = 0, 
    computerScore = 0;

//console.log(humanScore, computerScore);

//console.log("Hello World!");

function getComputerChoice()
{
    let a = Math.random();
    let string;
    if (a < (1/3)) string = "rock";
    else if (a < (2/3)) string = "paper";
    else string = "scissors";
    return string;
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



function playGame()
{
    let humanScore = 0, 
    computerScore = 0;

    let computerChoice;
    let humanChoice;

    function playRound()
    {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice().toLowerCase();
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
            else if (computerChoice === "paper")
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
            else (computerChoice === "scissors") 
            {
                console.log(`You lose! Scissors beat paper.`);
                computerScore++;
            }
        }
        else if (humanChoice === "scissors")
        {
            if (computerChoice === "paper")
            {
                console.log(`You win! Scissors beat paper.`);
                humanScore++;
            }
            else (computerChoice === "rock")
            {
                console.log(`You lose! Rock beats scissors.`);
                computerScore++;
            }
        }
    }

    for (let i = 0; i < 5; i++)
    {
        playRound(humanChoice, computerChoice);
        console.log("\nYour score: " + humanScore)
        console.log("\nComputer score: " + computerScore)
    }
}

playGame();