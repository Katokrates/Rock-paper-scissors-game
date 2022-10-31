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