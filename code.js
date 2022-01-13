let computerCount=0;
let playerCount=0;

function computerPlay()
{
    const choices=["Rock","Paper","Scissors"];
    return choices[Math.floor(Math.random()*choices.length)]

}
function letsPlay(playerSelection)
{
    
    
    let computerSelection= computerPlay().toLowerCase();
    playerSelection= playerSelection.toLowerCase();
    if (computerSelection == playerSelection)
    {
        console.log("Draw game.");
    }
    else if ((computerSelection == "rock" && playerSelection == "scissors") || 
    (computerSelection == "scissors" && playerSelection == "paper") || 
    (computerSelection == "paper" && playerSelection=="rock"))
    {
        computerCount = ++ computerCount;
        console.log("You lost this round.");
    }
    else
    {
        playerCount = ++ playerCount;
        console.log("You won this round.");
    }

}
function game()
{
   
    for(i=0;i<5;i++)
    {
        let playerSelection= prompt("Enter rock, paper or scissors:");

        letsPlay(playerSelection);
    }
    if (computerCount>playerCount)
    {
        console.log("You lost.");
    }
    else if (computerCount<playerCount)
    {
        console.log("You won.");

    }
    else
    {
        console.log("Draw.")
    }
}
game();

 