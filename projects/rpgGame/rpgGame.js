playerInfo = {
    name: "",
    hp: 120,
    inventory: []
}

var enemiesKilled = 0;

var enemy = [{

        name: "Evil Doppleganger",
        value: 5,
        inventory: ["mirror"]

    },
    {
        name: "Two-Headed Toad",
        value: 10,
        inventory: ["map"]

    },

    {
        name: "Crazy Midget",
        value: 20,
        inventory: ["gun"]
    }

]
var enemyIs;

//say hello ask & set name
var ask = require('readline-sync');
console.log('\nHi, welcome to your Colossal Adventure!\n');
var name = ask.question("What's your name? \n");
//use set name in sentence bewaring the player of the craziness of the game
console.log(name + " time to begin! Hold on! Beware, its crazy here, never know what you'll encounter...");
//call beginning of the game function
startWalking();
//in beginning function set players option for walking, checking inventory, and quitting game
//also include a default option is player picks wrong number or does nothing

function startWalking() {
    var options = ["Walk", "Check Inventory", "Quit Game"]
        //NOTE: you might have to turn keyInSelect options into numbers - not sure yet
    var doesWalk = parseInt(ask.keyInSelect(options, "To keep WALKING press 1..\nto see your INVENTORY press 2 ..\nto QUIT the game press 3.. ") + 1);
    //set conditions for the each option along with unique messages for each option

    // console.log messages
    if (doesWalk === 1) {
        wildAttackChance();
    } else if (doesWalk === 2) {
        console.log(" You currently have  " + playerInfo.inventory + "in your inventory.");
        console.log("Total Heart Points = " + playerInfo.hp + "left.")
        console.log("You have killed " + enemiesKilled + "enemies.");
        startWalking();
    } else if (doesWalk !== 1 && doesWalk !== 2) {
        var donePlaying = ask.keyInYN("Are you done playing?");
        if (donePlaying = "Y") {
            playerInfo.hp = 0;
            console.log("Thank for trying  " + playerInfo.name + "!!!");
        } else {
            startWalking();
        }


    }
    // when walk option is selected call the function that will determine if the player gets attacked
    //make it chance a player gets attacked when walking a 1 in 4 chance
    //if random number picked is 3 call the function for choosing a random enemy


    function wildAttackChance() {
        var randomNum = Math.floor(Math.random() * 4);
        if (randomNum % 2 === 0) {
            whichEnemy();
            //else call beginning function again        
        } else {
            console.log("So far the coast is clear, do you keep walking?");
            startWalking();

        }
    }
    //create function that randomly picks from the three enemies to fight
    function whichEnemy() {
        //create empty variable that will store the result of the random pick
        //set the empty variable to the enemies name based on a specific conditions
        //call the function that asks player what they want to do

        var ranNum = Math.floor(Math.random() * 20);
        if (ranNum <= 5) {
            enemyIs = enemy[0].name
            console.log("Out of nowhere, your" + enemyIs + " appears, and come rushing toward you!");
            whatToDo();
        } else if (ranNum > 5 && ranNum <= 10) {
            enemyIs = enemy[1].name;
            console.log("Suddenly a giant" + enemyIs + " jumps out at you. Trying to squirt you with a poisonous slime-like substance!");
            whatToDo();
        } else if (ranNum > 10 && ranNum <= 20) {
            enemyIs = enemy[2].name;
            console.log("Shit! You thought everything was cool, until a bullet flies by your head. You turn to see what is shooting at you, and see an angry" + enemyIs + " with a gun!")
            whatToDo();
        }
    }

    //set the player choices available for when an enemy does decide to attack
    //create a variable set to an ask.keyInSelect(might have to set as an integer) to pick which action they' like 
    //set conditions for each choice and provide a new message for each that calls a function reflecting the players decision

    function whatToDo() {
        var choices = ["Run", "Fight"];
        var fleeOrFight = parseInt(ask.keyInSelect(choices, "What are you going to do? Press 1 to run...Press 2 to fight."));
        if (choices === 1) {
            //call the function for deciding to run        
            playerRan();
        } else {
            //call the function for deciding to fight
            console.log('You decided to fight, lets see who wins.');
            attackEnemy();
        }

    }
    //--DECIDING TO RUN FUNCTION--
    //set random number variable to a 50/50 chance of dying for deciding to run
    function playerRan() {
        var numPicked;
        var randNum = Math.floor(Math.random() * 2);
        numPicked = randNum;
        //create conditions that need to be met for player to continue playing
        //deduct a set number of players hp to be subtracted upon choosing to run
        // call beginning function again
        if (numPicked === 2 && playerInfo.hp > 0) {
            playInfo.hp -= 20;
            console.log("You decided to run like a girl. And got away this time. You have" + playerInfo.hp + "heart points remaining. You just lost 20 heart points for running away.");
            startWalking();
        } else {
            //set players hp to 0 and provide GAME OVER message
            playerInfo.hp = 0;
            console.log("You ran like a sissy la-la and got killed anyway. HAHA Game Over.");
        }

    }
    //create an attack/fight function that gives player a 50/50 chance of winning
    //create conditions for the results 
    //if player wins call the winning function
    //if player loses  set player hp to 0, and create a GAMEOVER message
    function attackEnemy() {
        var whoWins;
        var winningNum = Math.floor(Math.random() * 2);
        whoWins = winningNum;
        if (whoWins === 1 && playerInfo.hp > 0) {
            console.log("You kicked the enemies ass. Right on!")
            youWon();

        } else {
            playerInfo.hp = 0;
            console.log("You put up a good fight but were killed. Game Over");

        }
    }
    //set a variable called winner to equal true
    //deduct 30 player hp for fighting
    //add one to the players enemiesKilled count
    //call function that puts the enemies inventory item into players empty array for winning
    function youWon() {
        var winner = true;
        playerInfo.hp -= 30;
        enemiesKilled++;
        getItem();
        //check to see if the  total amount of enemies to be killed(4) has been met
        //if so display a winning message and set the players hp to equal zero to stop the while loop and end game
        if (playerInfo.hp > 0 && enemiesKilled >= 4) {
            console.log("You Won! You made it pass those enemies, and back to your own world!");
            playerInfo.hp = 0;
        } else {
            //if total amount of enemies hasnt been met call the beginning function again.
            if (playerInfo.hp > 0 && winner === true) {
                console.log("Man you're lucky you're alive!");
                getItem();
            }
        }
        //create a function that checks is player is the winner and players hp are more than 0
        // if conditions are met push the item in the losing enemies inventory to the players empty array
        function getItem() {
            if (playerInfo.hp > 0 && enemyIs === enemy[0]) {
                playerInfo.inventory.push(enemy[0].inventory++);
                console.log("You notice a mirror on the ground, pick it up. What the HELL your gonna do with a mirror, you dont know, but you keep it anyway.");
                startWalking();
            } else if (playerInfo.hp > 0 && enemyIs === enemy[1]) {
                playerInfo.inventory.push(enemy[1].inventory++);
                startWalking();
            } else {
                playerInfo.inventory.push(enemy[2].inventory++);
                startWalking();
            }

        }
        //create the while loop conditions to be met for player to continue playing

        while (playerInfo.hp > 0 && enemiesKilled < 4) {
            startWalking();
        }
    }
}