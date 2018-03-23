const options = ("Powered Up", "Big,Small", "Dead");
class PlayerInfo {
    constructor(name, number, status, star, hits, powerUps) {
        this.name = "";
        this.number;
        this.status = "";
        this.star;
        this.hits = "";



    }

    setName();
    gotHit();
    powerUp();
    totalCoins();
    gameActive();

}

PlayerInfo.prototype.setName = (namePicked) => {
    if (namePicked === "Mario") {
        this.name = "Mario";
    } else {
        this.name = "Luigi";
    }
};

PlayerInfo.prototype.gotHit = (str) => {

    let randomNum;
    options(Math.floor(Math.random() * 4));
    if (randomNum === 1) {
        this.status = options(0);
    } else if (randomNum === 2) {
        this.status = options(1);
    } else if (randomNum === 3) {
        this.status = options(2);
    } else {
        this.status = options(3);
    }
};

PlayerInfo.prototype.powerUp = (status) => {
    if (this.status === options[0] || this.status === options(1)) {
        console.log(this.status);
    }
};

PlayerInfo.prototype.gameActive = (stars) => {
    if (this.status !== options(3)) {
        this.status = true;
    }
}
PlayerInfo.prototype.totalCoins = (num) => {
    this.number = num;
}
PlayerInfo.prototype.print = (stats) => {
    console.log(`Player Stats: ${this.name} ${this.number}
    ${this.status} ${this.star}`);

};
const randomFunc = (num) => {
    const decidingNum = Math.floor(Math.random() * 3);
    if (decidingNum === 0) {
        gotHit();

    } else if (decidingNum === 1) {
        powerUp();
    } else {
        totalCoin();
    }
}




class player1 extends PlayerInfo {
    super(name, number, status, star) {
        player1.setName();
        player1.gotHit();
        player1.powerUp();
        player1.totalCoins();
        player1.gameActive();
        player1.print();
    }
}