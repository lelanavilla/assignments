//synched code example below

function myFunc1() {
    console.log("1");
    myFunc3();
}

function myFunc2() {
    console.log("2");
}

function myFunc3() {
    console.log("3")
    myFunc2();
}

// myFunc1();
// myFunc2();
// myFunc3();

//setTimeOut is a function that allows you to mimic synced code

// setTimeout(function(){
//     console.log("Im late");
// },3000);

// TAKE NOTE OF THE SYNTAX OF SETTIMEOUT ITS FUNCTION THAT TAKES A FUNCTION AND USES ANOTHER FUNCTION AS AN ARGUEMENT CLOSES THE FUNCTION WITH THE CURLY BRACKET FOLLOWED BYA COMMA, AND THE AMOUNT OF TIME TO WAIT IN 1000'S (1000 = 1 SEC) FOLLOWED BY THE ) TO CLOSE THE ARGUEMENT IN THE SETIMTEOUT FUNCTION


// function asyncGETWeatherData(callback) {
//     var data = "Snowing today";
//     setTimeOut(function() {
//         callback(data):
//     }, 2500);
// }

// asyncGETWeatherData(function(weatherData) {
//     console.log("Todays forecast: " + weatherData);

// })


REQUEST TO STARS WARS API
//generic function to get json response in javascript format
request("https://swapi.co/api/planets/", function(err, response, body) {
    if (!err && response.statusCode === 200) {
        var data = JSON.parse(body);
        console.log(data);
    }

})