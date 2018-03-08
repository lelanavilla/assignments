var lyrics = ["This", "hit", "that", "ice", "cold",
    "Michelle", "Pfeiffer", "that", "white",
    "gold", "This", "one", "for", "them",
    "hood", "girls", "Them", "good", "girls",
    "straight", "masterpieces", "Stylin'",
    "whilen'", "livin'", "it", "up", "in",
    "the", "city", "Got", "Chucks", "on",
    "with", "Saint", "Laurent", "Gotta", "kiss",
    "myself", "I'm", "so", "pretty"
];

function printedToConsole(arr) {
    console.log(arr.join("  "));
}
printedToConsole(lyrics);

function reverseLyrics(arr) {
    console.log(arr.reverse().join("  "));
}
reverseLyrics(lyrics);

function everyOther(arr) {
    var skipped = [];
    for (var i = 0; i < arr.length; i += 2) {
        skipped.push(arr[i]);
 }
 printedToConsole(skipped);
}
everyOther(lyrics);

function everyTwoReversed(arr){
    var twoReversed=[];
for( var i=0; i < arr.length; i++){
    if(arr[i] % 2 === 1){
        

    twoReversed.push(arr[i] + 1).reverse();
    }
}
printedToConsole(twoReversed);
}
everyTwoReversed(lyrics);
