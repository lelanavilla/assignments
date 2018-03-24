ask = require("readline-sync");
var name = ask.question("Welcome to the Escape Room, what is your name");
var yesOrNo = ["yes", "no"];
var whatToDo = (ask.keyInSelect(yesOrNo, name + " you've just awoken to see your in a strange \nroom, you get up and the doors locked. WTF! Looks like you'll have\n to figure out how to escape. Would you like to play, press 1 for yes and n for 2") + 1);
var keyInSelect = 1
startGame();


contPlaying = false;
console.log("Thanks for stopping by " + name);
}

function startGame() {
    var options = ["Put hand in hole", "find the key", "open the door "];
    var playerChoice = parseInt(ask.keyInSelect(options, " Great," + name + " you decided to play! What would you like to do?"));
    if (keyInSelect === 1) {
        contPlaying = false;
        console.log("You put your hand in the hole, were poisoned and instantly died! Game Over!");
    } else if (keyInSelect === 2) {
        console.log("You look for a long time, and finally find a key! Hooray! You head towards the door to unlock it");
        unlockTheDoor();
    } else {
        console.log("You need to find the key first silly");
        startGame();
    }
};

function keepPlaying() {

    if (contPlaying === true) {
        startGame();
    }
}