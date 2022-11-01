let pcChosen;
let result;
let playerScore = 0;
let pcScore = 0;

function getPcChoice (){
    let pcChoice = Math.floor(Math.random() * 3);

    if(pcChoice == 0){
       pcChosen = "Rock";
    }else if(pcChoice == 1){
        pcChosen = "Paper";
    }else{
        pcChosen = "Scissors";
    }
}

//Result info. 0 is a win, 1 is a tie and 2 is a loss.

function playRound (){
    let playerChoice = prompt("Please choose between Rock, Paper or Scissors.");
    let playerTransformedChoide = playerChoice.toLowerCase();
    getPcChoice();
    
    switch(playerTransformedChoide){
        case "rock":
            if(pcChosen == "Rock"){
                console.log("Rock and Rock. It's a tie!");
                result = 1;
            }else if(pcChosen == "Paper"){
                console.log("Rock and Paper. You lose!");
                result = 2;
            }else{
                console.log("Rock and Scissors. You win!");
                result = 0;
            }
        break;
        
        case "paper":
            case "rock":
                if(pcChosen == "Rock"){
                    console.log("Paper and Rock. You win!");
                    result = 0;
                }else if(pcChosen == "Paper"){
                    console.log("Paper and Paper. It's a tie!");
                    result = 1;
                }else{
                    console.log("Paper and Scissors. You lose!");
                    result = 2;
                }
            break;
        
        case "scissors":
            case "rock":
            if(pcChosen == "Rock"){
                console.log("Scissors and Rock. You lose");
                result = 2;
            }else if(pcChosen == "Paper"){
                console.log("Scissors and Paper. You win!");
                result = 0;
            }else{
                console.log("Scissors and Scissors. It's a tie!");
                result = 1;
            }
        break;

        default:
            console.log("You are supposed to write rock, paper or scissors.");

    }
}

function game(){
    for (let i = 0; i < 5; i++){
        playRound();
        if(result == 0){
            playerScore++;
        }else if(result == 1){
            playerScore++;
            pcScore++;
        }else{
            pcScore++;
        }
    }
    console.log("This is the player Score", playerScore )
    console.log("This is the PC Score", pcScore);

    if(playerScore < pcScore){
        console.log("You lost, try again!")
    }else if(playerScore > pcScore){
        console.log("Yaaay, you won!")
    }else{
        console.log("It's a draw, try again!")
    }

    playerScore = 0;
    pcScore = 0;
    
}