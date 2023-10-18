function getComputerChoice()
{
    randomNumber = Math.floor(Math.random() * 99) + 1;
    if (randomNumber > 0 && randomNumber <= 33)
    {
        return("ROCK");
    }
    else if (randomNumber > 33 && randomNumber <= 66)
    {
        return("PAPER");
    }
    else if (randomNumber > 66 && randomNumber <= 99)
    {
        return("SCISSORS");
    }
}

function playRound(playerSelection, computerChoice)
{
    const results = document.querySelector("#results");

    if (playerSelection == computerChoice)
    {
        const p = document.createElement("p");
        p.textContent = "It's a tie!";
        results.appendChild(p);
        return("Tie");
    }
    else if (playerSelection == "ROCK" && computerChoice == "PAPER")
    {
        const p = document.createElement("p");
        p.textContent = "You lose! Paper beats Rock";
        results.appendChild(p);
        return("Computer");
    }
    else if (playerSelection == "ROCK" && computerChoice == "SCISSORS")
    {
        const p = document.createElement("p");
        p.textContent = "You win! Rock beats Scissors";
        results.appendChild(p);
        return("Player");
    }
    else if (playerSelection == "PAPER" && computerChoice == "ROCK")
    {
        const p = document.createElement("p");
        p.textContent = "You win! Paper beats Rock";
        results.appendChild(p);
        return("Player");
    }
    else if (playerSelection == "PAPER" && computerChoice == "SCISSORS")
    {
        const p = document.createElement("p");
        p.textContent = "You lose! Scissors beats Paper";
        results.appendChild(p);
        return("Computer");
    }
    else if (playerSelection == "SCISSORS" && computerChoice == "ROCK")
    {
        const p = document.createElement("p");
        p.textContent = "You lose! Rock beats Scissors";
        results.appendChild(p);
        return("Computer");
    }
    else if (playerSelection == "SCISSORS" && computerChoice == "PAPER")
    {
        const p = document.createElement("p");
        p.textContent = "You win! Scissors beats Paper";
        results.appendChild(p);
        return("Player");
    }
}

function startGame()
{
    const results = document.querySelector("#results");
    const choiceButtons = document.querySelectorAll(".choiceButton");
    let playerScore = 0;
    let computerScore = 0;

    let gameOver = false;

    choiceButtons.forEach(choice => {
        choice.addEventListener("click", () => {
        if (gameOver == false)
        {
            if (playerScore == 5 || computerScore == 5)
            {
                gameOver = true;
            }
            
            let playerSelection = choice.textContent.toUpperCase();
            let roundWinner = playRound(playerSelection, getComputerChoice());
        
            if (roundWinner == "Player")
            {
                console.log(playerScore);
                playerScore++;
            }
            else if (roundWinner == "Computer")
            {
                computerScore++;
            }
        }
        })
    
    })

    if (playerScore == 5)
    {
        const p = document.createElement("p");
        p.textContent = "You win the game!";
        results.appendChild(p);
    }
    else if (computerScore == 5)
    {
        const p = document.createElement("p");
        p.textContent = "You win the game!";
        results.appendChild(p);
    }
}

startGame();