var ask = require('readline-sync');
console.log('\nHi, welcome to your Colossal Adventure!\n')
var name = ask.question("What's your name? \n")

console.log(name + " time to begin! Hold on! It's crazy up in here...")
playGame();


var playerInfo = [{
    name: name,
    hp: 150,
    totalEnemies: 0,
    wonItems: []
}]


function playGame() {
    console.log("\nPlease choose an action below.\n");


    var beginning = ask[ask.keyInSelect(["Walk", "Print Stats", "Quit"])];
    switch (beginning) {
        case "Walk":
            walk();
            break;
        case "Print stats":
            printStats();
            break;
        case "Quit":
            playerInfo.hp = 0;
            break;
        default:
            console.log("Pick an number thats on the screen dickhead");
            playGame();
    }


}

function getItems() {
    var items = ["sword", "shield", "machine gun", "whistle"];
    if (playerInfo.hp >= 25 && playerInfo.hp <= 100) {
        playerInfo.wonItems.push(items[3]);
        console.log("You pick up a" + items[3] + " from the enemy after that battle, what the hell you'll do with a whistle, I don't know, but you keep it anyway.");

    } else if (playerInfo.hp >= 100 && playerInfo.hp < 150) {
        playerInfo.wonItems.push(items[0]);
        console.log("You now have a " + items[0] + ".");

    } else {
        playerInfo.wonItems.push(items[2]);
        console.log("You get a " + items[2] + "now that you're almost dead. F#$#!N^ great");
    }

}

console.log("Currently you have" + playInfo.hp + "and" + playerInfo.wonItems + " that you've acquired during your battles");
}

function walk() {
    var enemyHere = Math.floor(Math.random() * 10)
    if (enemyHere < 4) {
        console.log("Suddenly an enemy jumps out and attacks you.");
        fight();
    } else {
        console.log("There are no enemies here. ")


    }
}


function run() {
    var num1 = Math.floor(Math.random());
    var num2 = Math.floor(Math.random());
    if (num1 > num2) {
        playInfo.hp -= 20;
        console.log("You have" + playerInfo.hp + "heart points remaining. You just lost 20 heart points for running away.");
    } else {
        playerInfo.hp = 0;
        console.log("You get killed anyway.Game Over.");
    }

}



function fight() {
    var actions = ask[ask.keyInSelect(["Run", "Fight"])];
    switch (actions) {
        case "Run":
            run();
            break;
        case "Fight":
            attackEnemy();
            break;
        default:
            console.log("Hurry and do something sissy");
            fight();
    }

}

function attackEnemy() {
    var nameNum = Math.floor(Math.random());
    var enemyNum = Math.floor(Math.random());
    if (nameNum > enemyNum) {
        playInfo.hp -= 30;
        playerInfo.totalEnemies++;
        printStats();

        console.log("You're alive, but you barely survived" + "you currently have " + playerInfo.hp + "left.");
    } else {
        console.log("You were killed. Game Over");
        playerInfo.hp = 0;
    }
}

function totalKilled(num) {
    var totalEnemies;
    totalEnemies += 1;
    if (totalEnemies >= 4) {
        console.log("You Won! You made it pass those enemies, and back to your own world!");
    } else {

    }
}


while (playerInfo.hp > 0) {
    playGame();
}