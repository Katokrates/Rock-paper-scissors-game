let pcChosen;

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

function playRound (){
    let playerChoice = prompt("Please choose between Rock, Paper or Scissors.");
    let playerTransformedChoide = playerChoice.toLowerCase();
    getPcChoice();

    switch(playerTransformedChoide){
        case "rock":
            if(pcChosen == "Rock"){
                console.log("Rock and Rock. It's a tie!")
            }else if(pcChosen == "Paper"){
                console.log("Rock and Paper. You lose!")
            }else{
                console.log("Rock and Scissors. You win!")
            }
        break;
        
        case "paper":
            case "rock":
                if(pcChosen == "Rock"){
                    console.log("Paper and Rock. You win!")
                }else if(pcChosen == "Paper"){
                    console.log("Paper and Paper. It's a tie!")
                }else{
                    console.log("Paper and Scissors. You lose!")
                }
            break;
        
        case "scissors":
            case "rock":
            if(pcChosen == "Rock"){
                console.log("Scissors and Rock. You lose")
            }else if(pcChosen == "Paper"){
                console.log("Scissors and Paper. You win!")
            }else{
                console.log("Scissors and Scissors. It's a tie!")
            }
        break;

        default:
            console.log("Something went wrong");

    }
    
}