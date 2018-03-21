window.onload = init()

function init() {
    var momsList = {

        item1: "Romaine Lettuce",
        item2: "Radicchio Lettuce",
        item3: "Green Leaf Lettuce",
        item4: "Kale",
        item5: "Spinach",
        item6: "Red Cabbage"
    };
    console.log("momsList");

    var form = document.getElementById("moms");
    var input = document.getElementById("input");
    var add = document.getElementById("add");
    var list = document.getElementById("list-items");
    var newItem = "";

function 
    function addNewItem() {
        form.input.addEventListener("input", function(e) {
            e.preventDefault();
            input = input.value;
            momsList.appendChild("<li>" + newItem.push("momsList.newItem.input") + "</li>");
            var momsListJson = JSON.stringify("momsList");
            localStorage.setItem("momsList.newItem", momsListJson);
            var newMomsListItemJSON = localStorage.getItem("momsList.newItem");
            var newMomsListItem = JSON.parse(newMomsListItemJSON);

        })
    }
}

// // Create a new list item when clicking on the "Add" button
// function newElement() {
//     var li = document.createElement("li");
//     var inputValue = document.getElementById("input").value;
//     var newTodo = document.createTextNode(inputValue);
//     li.appendChild(newTodo);
//     if (inputValue === '') {
//         alert("You must write something!");
//     } else {
//         document.getElementById("myUL").appendChild(li);
//     }
//     document.getElementById("input").value = "";


//     $(document).ready(function()) 

//         $('#list-items').html(localStorage.getItem('listItems'));

//         $('.add-items').submit(function(event) {
//             event.preventDefault();

//             var item = $('#input').val();
//             if (item) {
//                 $('#list-items').append("<li>" ('#input').value);
//                 localStorage.setItem('listItems', $('#list-items').html());

//                 $('#todo-list-item').val("");
//             }

//         });

//         //delete item from todo list
//         $(this).closest("li").remove();
//     })