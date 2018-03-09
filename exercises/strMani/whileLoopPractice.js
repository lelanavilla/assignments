var ask = require('readline-sync')

var playTheGame = function(){
    var playerName = ask.question("Hey, whats your name");
    console.log("thanks " + playerName + "nice to meet you!");
    if (playerName === "Ben"){ 
        console.log("Go Away Ben");
        keepPlaying = false;
    } else if (playerName === 'Jamie'){
        console.log("Great! You Won!");
        keepPlaying = false;
    }
    
    while (true){
    playTheGame();
    }
};