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

function todoStorage(id) {

}
//CREATE AN OBJECT WITH KEYS = TO EMPTY STRINGS ""
var myData = {
    title: "",
    price: "",
    description: "",
    imgUrl: "",
    updatedPrice: "",
    updatedDescription: ""
};
//SET THE INPUTS ON DOM
var form = document.getElementById("form");
var title = document.getElementById("title");
var price = document.getElementById("price");
var description = document.getElementById("description");
var imgUrl = document.getElementById("imgUrl");
var updatedPrice = document.getElementById("updatedPrice");
var updatePriceButton = document.getElementById("updatePriceButton");
var updatedDescription = document.getElementById("updatedDescription");
var updatedDescriptionButton = document.getElementById("updatedDescriptionButton");
var updatePrice = document.getElementById("updateButton");
var deleteButton = document.getElementById("deleteButton");



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

updatedPrice.addEventListener("input", function(event) {
    myData.updatedPrice = event.target.value;
})
updatedDescription.addEventListener("input", function(event) {
    myData.updatedDescription = event.target.value;
})
form.addEventListener("submit", function(e) {
    event.preventDefault();
    axios.post("https://api.vschool.io/heaven/todo", myData).then(function(response) {
        console.log(response.data);
    })
})

// function markToDoCompleted(id) {
//     axios / put(`https://api.vschool.lelanavilla/todo/${todo._id}`, { complete: !todo.completed }).then(function(response) {
//             const span = document.querySelector(`${todo._id}`) > span `)
//         span.style.color ="gray
//     }
// })
//     _id}`)
//     }

// function createTodoLi(todo) {
//     return `
// <li id = "${todo._id}">
// <button onlick="deleteItem('${todo._id}')">x</button>


function updatedPriceTodo(priceToUpdate) {
    form.updatePriceButton.addEventListener("submit", function(e) {
            event.preventDefault();
            axios.put("https://api.vschool.io/lelanavilla/todo/" + priceToUpdate._id, { description: myData.updatedPrice }).then(function(response) {
                alert("Your update was successfully completed");
            }, function(response) {
                alert("There was a problem with your update, try again");
            })
        },
        function updatedDescriptionTodo(descriptionToUpdate) {
            form.updateDescriptionButton.addEventListener("submit", function(e) {
                    event.preventDefault();
                    axios.put("https://api.vschool.io/lelanavilla/todo/" + descriptionToUpdate._id, { description: myData.updatedDescription }).then(function(response) {
                        alert("Your update was successfully completed");
                    }, function(response) {
                        alert("There was a problem with your update, try again");
                    })
                })
                //PUT REQUEST need id included after the / that has your name


        })
}



//DELETE REQUEST-probably needs ref id for todo item to delete
// function deleteTodo(id) {
//     axios.delete(` https: //api.vschool.io/lelanavilla/todo" + ${id}`).then(function(response) {
//             document.getElementById("_id").remove();
//             alert("Your item was removed successfully");
//         },
//         function(response) {
//             alert("There was a problem with your delete request.");
//         })


form.deleteButton.addEventListener("delete", function(e) {
    event.preventDefault();
    deleteTodo();
})