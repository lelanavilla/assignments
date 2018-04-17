    const express =  require("express");
const app = express();
const uuid = require("uuid");
const bodyParser = require("body-parser");

let todos = require("./todos.js");

const port = 8080;

//this is the conveyor belt
//middlewear is the conveyor belt
//good to define your middle wear above your routes
app.use(bodyParser.json());

//routes
app.route("/todos")
.get((req, res) => {
    res.status(200).send(todos);
})
//post request:
//consvert request body to JSON
//provide an id to the data(todo)being added
.post((req, res) => {
    const newTodo = req.body;
    //create uuid to create a unique id for the new post request
    newTodo._id = uuid();
    //put newTodo in array
    todos.push(newTodo);
    //send back the data
    res.status(201).send(newTodo);
    // console.log(res.body);
    //give data in the request body an id
    //save the data ibtge request body in the "database"( or right now the "array")
//send back the data that was added
})

//GET one request
//any requests to the todos/id endpoint well send back the 
app.route("/todos/:id")
.get((req, res) => {
    //get param id
 const{id} = req.params;
 //below js sets foundtodo to the result of its function that filters 
 //the todo array with the todo_.id 
 const foundTodo = todos.filter(todo => todo._id ===id )[0];
 res.status(200).send(foundtodo);
    
})
//DELETE one request
.delete ((req,res) => {
    const {id} = req.params;
    //find and remove todo matching id
    //try the new way we read about last night
    //Array.from(newSet(todos))
    //or try regEx

     todos = todos.filter(todo => todo._id !== id);
    //send back the message the todo was removed
    res.status(204).send();
})
//PUT REQUEST
.put((req, res)=> {
    //find the param id
    const {id} = req.params;
    let editedTodo = req.body;
//use map to replace the todo with matching id with req.body
    todos = todos.map( todo => todo._id === id ? editedTodo = {...todo, ...editedtodo}: todo);
    res.status(200).send(editedTodo);

})


app.listen(port, () => console.log("Server running on port " + port));