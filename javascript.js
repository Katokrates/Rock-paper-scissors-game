function getPcChoice (){
    let pcChoice = Math.floor(Math.random() * 3);

    if(pcChoice == 0){
        console.log("Rock");
       // return "Rock";
    }else if(pcChoice == 1){
        console.log("Paper");
       // return "Paper";
    }else{
        console.log("Scissors");
       // return "Scissors";
    }
}

function playRound (){
    let playerChoice = prompt("Please choose between Rock, Paper or Scissors.");
    getPcChoice();

    if(playerChoice === "rock"||"Rock"){
        console.log(playerChoice);
        console.log("test");
    }else{
        console.log("fail")
    }

}