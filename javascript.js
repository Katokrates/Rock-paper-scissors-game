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
    console.log(playerTransformedChoide);
    getPcChoice();
    
}