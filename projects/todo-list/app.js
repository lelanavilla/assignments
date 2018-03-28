var todoUrl = "https://api.vschool.io/lelanavilla/todo/";
//write function to be able to create elements
function createTodoProperty(elem, text) {
    var prop = document.createElement(elem);
    prop.innerHTML = text;
    return prop;
}
//create function that creates the new todo item info
function createTodoInfo(todo, parent) {
    parent.appendChild(createTodoProperty("h3", todo.title));
    parent.appendChild(createTodoProperty("p", todo.description));
    parent.appendChild(createTodoProperty("p", todo.price));
}
//create the function to see if the check boxes are checked or not
function checkOff(label, checked) {
    if (checked) {
        label.style.textDecoration = "line-through";
    } else {
        label.style.textDecoration = "none";
    }
}

function addToDOM(todo) {
//store the todos _id as the li's id after you use axios to create a li item
    let li = document.createElement("li");
    li.id = todo._id;

    //  display(or append) todos info to the list item/element
    createTodoInfo(todo, li);

    // use axios to create a button element on the DOM and
    // name it the "delete" button
    var button = document.createElement("button");
    button.innerText = "Delete";

    //tell the button to listen for clicks:
    button.addEventListener("click", function (e) {
        // DELETE METHOD -remove todo from database and webpage:
        axios.delete(todoUrl + todo._id).then(function (response) {
            todoList.removeChild(li);
        })
    });
    //add button to li:
    li.appendChild(button);
//use axios to create html elements from the js file as below;
    // create checkbox:
    let input = document.createElement("input");
    input.type = "checkbox";
    input.id = todo.id + "completed";
    input.checked = todo.completed;

    //create label- this is optional
    let label = document.createElement("label");
    label.innerText = "Status";
    label.htmlFor = input.id;
    //put a strikeout line when todo is completed
    checkOff(li, todo.completed);
    label.appendChild(input);

    // add eventlistener to listen for checkbox changes:
    input.addEventListener("change", function (e) {
        let checked = e.target.checked;
        // make PUT request, sending an object with the posts unique _id 
        //and make it the input's new value:
        axios.put(todoUrl + todo._id, { completed: checked }).then(function (response) {
            checkOff(li, checked);
        })
    })
    // make label/input and attach(append) to li
    li.appendChild(label);

    //finally append the li element to its parent and  the DOM
    todoList.appendChild(li);
}

var todoList = document.getElementById("todo-list");

axios.get(todoUrl).then(function (response) {
    var todos = response.data;
    for (var i = 0; i < todos.length; i++) {
        // create li element
        let todo = todos[i];
        addToDOM(todo);
    }
})

// POST Method via axios
var form = document.getElementById("form");
var inputData = {};

form.addEventListener("submit", function (e) {
    e.preventDefault();
    // set the values of my inputs onto the empty inputData obj you created above
    inputData.title = e.target.title.value;
    inputData.description = e.target.description.value;
    inputData.price = e.target.price.valueAsNumber;
    inputData.imgUrl = e.target.imgUrl.value;
    //send/post to whatever server
    axios.post(todoUrl, inputData).then(function (response) {
        var todo = response.data;
        addToDOM(todo);
    });
});