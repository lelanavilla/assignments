class Party {
    constructor(name, population) {
        this.name = "name";
        this.population = population;
    }

    sendNuke() {
        console.log(`Looks like the ${this.name} party is prepping a nuke`);
    }

}




let penguins = new Party("penguins", 1000000);
penguins.flipACoin();

let communists = new Party("communists", 1000000);

flipACoin = () => {
    let whoStarts = Math.floor(Math.random * 2);
    if (whoStarts === 1) {
        console.log('The penguins send out a nuke!')
        sendNuke();
    } else {
        communists.sendNuke();
    };



}
const sendNuke() => {
    let randomNum = Math.floor(Math.random * 2);
    if (randomNum === 1) {
        console.log(`${this.party}'s nuke hits main land, devastating the enemy population!`);
        onHit();

    } else {
        onMiss();
    }

    onHit => {
        let amountKilled;
        let killed = Math.floor(Math.random * 100000);
        amountedKilled = killed;
        if (Party.name === penguins.name) {
            communist.population - amountKilled;
        } else {
            penguin.population - amountKilled;
        };
        flipACoin();
    };


    onMiss => {
        console.log("Bad training results in the nuke missing land and ends up at sea!")
        if (this.Party.name !== Party.name);
        sendNuke();

    }


};
while (player.population > 0) {
    flipCoin();
}