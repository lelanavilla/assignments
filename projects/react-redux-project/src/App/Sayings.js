import React from "react";

function Sayings(props) {
    const { temp } = props;
    const tempSayings = {
        under40: ["Mother Nature HATES you!", "Oh look, you must live in Salt Lake City, Utah, lucky you!", "Its a I WISH I LIVED IN CALIFORNIA day.", "Just stay inside today, you're boss will understand.", "Oh Shit, the kids might not have school, CRAP..better start thinking about how to keep those little A$$holes busy", "It must be Christmas and Santa just doesn't like you."],
        between41And70: ["Not too cold, not too hot, so now what?", "It could be worse, you could live in Antarctica!", "You definitely wont be shoving snow today", "Annoying Weather, especially if you have a friend who is ALWAYS cold!"],
        between71And90: ["A California weather day, unless your in California, then its kinda cold.", "The weathers today is nothing to write home about"],
        between91And100: ["An I WISH WE HAD A POOL DAY", "Hopefully your air conditioner works", "Its a GET OFF YOUR ASS, AND GO OUTSIDE DAY!"],
        over100: ["I'm melting!!!", " Mother Nature Hates You", "Definitely a day you WISHED you lived ANYWHERE ELSE!", "FORECAST TODAY: 100% chance of skin cancer!"]
    }

    // const comment = () => 
    let comment;
    if (temp <= 40) {
        comment = tempSayings.under40[Math.floor(Math.random()) * tempSayings.under40.length];
    }
    else if(temp >=41 && temp <= 70) {
        comment = tempSayings.between41And70[Math.floor(Math.random()) * tempSayings.between41And70.length];
    }
    else if (temp >= 71 && temp <= 90){
        comment = tempSayings.between71And90[Math.floor(Math.random()) * tempSayings.between71And90.length];

    }else if(temp <=91 && temp <= 100){
        comment = tempSayings.between91And100[Math.floor(Math.random()) * tempSayings.between91And100.length];

    }else if (temp >100){
        comment = tempSayings.over100[Math.floor(Math.random()) * tempSayings.over100.length];

    }

    return (
        <div className="my-comment">
            {comment}
        </div>
    )
}

export default Sayings;
