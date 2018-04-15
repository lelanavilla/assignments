var weather;
var api="http://api.openweathermap.org/data/2.5/weather?q=";
// var city ="Salt Lake City";
var apiKey ="&APPID=36efdd253e8c7e420cf8fabc76fedcd3";
var units ="&units=metric";
// var url = "http://api.openweathermap.org/data/2.5/weather?q=Fresno&APPID=36efdd253e8c7e420cf8fabc76fedcd3&units=metric"
var input;
function setup(){
    createCanvas(400,400);
     var button = select('#submit');
    button.mousePressed(getWeather);
    input= select('#city');
}
    function getWeather(){
        // var city
     var url = api + input.value + apiKey + units;
    loadJSON(url, gotData);
}

function gotData(data){
// println(data);
weather = data;

}

function draw(){
    background(0);
    if(weather){
        var temp= weather.main.temp;
        var humidity= weather.main.humidity;
        var pressure = weather.main.pressure;
        ellipse(100,100, humidity,humidity);
        ellipse(300,100, temp,temp);
        ellipse(200,100, pressure, pressure);
    }
}