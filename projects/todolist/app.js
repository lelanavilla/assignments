//GET REQUEST

// var axios = require("axios");
axios.get("https://api.vschool.io/bob/todo/").then(function(response) {
    console.log(response.data);
    var todoList = document.getElementById("todos");
    for (var i = 0; i < response.data.length; i++) {
        todoList.innerHTML += "<li>" + response.data[i].title +
            "</li>"
    }
});
//POST REQUEST
axios.post("https://api.vschool.io/heaven/todo", {
        title: "my First todo"
    })
    .then(function(response) {
        console.log(response.data);
        var todoList = document.getElementById("todos");
        todoList.innerHTML += "<li>" + response.data.title +
            "</li>"
    });

//CREATE AN OBJECT WITH KEYS = TO EMPTY STRINGS ""
var myData = {
        title: "",
        price: "",
        description: "",
        imgUrl: ""
    }
    //SET THE INPUTS ON DOM
var form = document.getElementById("form");
var title = document.getElementById("title");
var price = document.getElementById("price");
var description = document.getElementById("description");
var imgUrl = document.getElementById("imgUrl");
var update = document.getElementById("update");



title.addEventListener("input", function(event) {
    myData.title = event.target.value;
})
price.addEventListener("input", function(event) {
    myData.price = event.target.value;
})
description.addEventListener("input", function(event) {
    myData.description = event.target.value;
})
imgUrl.addEventListener("input", function(event) {
    myData.imgUrl = event.target.value;
})
form.addEventListener("submit", function(e) {
    event.preventDefault();
    axios.post("https://api.vschool.io/heaven/todo", myData).then(function(response) {
        console.log(response.data);
    })
})

//PUT REQUEST need id included after the / that has your name
form.update.addEventListener("submit", function(e) {
    event.preventDefault();
    axios.put("https://api.vschool.io/lelanavilla/todo").then(function(response) {
        console.log(response.data);
    })
})

//"_id":"ç"
//sessionId:"lelanavilla"

axios.put("https://api.vschool.io/lelanavilla/todo/5aaff511eec94d291400aeed", { title: "Finish put Request" }).then(function(response) {
    console.log(response.data);

})