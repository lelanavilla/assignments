const express = require("express");
const uuid = require("uuid");
const bodyParser = require("body-parser");

const app = express();

let photos = require("./photos.js");

const port = 8080;

//middleware
app.use(bodyParser.json());

//routes
app.route("/photos")
.get((req,res) => {
    const {query}= req;
    const queriedPhotos = photos.filter( photo =>{
        for(let key in query){
            if(!photo.hasOwnProperty(key) || String(photo[key].toLowerCase) !== query[key]){
                return false;
            }
        }
        return true;
    })
    res.status(200).send(queriedPhotos);
})
.post((req,res)=> {
    const newPhoto = req.body;
    newPhoto._id = uuid();
    photos.push(newPhoto);
    res.status(201).send(newPhotos);

})
//GET one request

app.route("/photos/:id")
.get((req, res)=> {
    const{id}= req.params;
    const foundPhoto= photos.filter(photo => photo._id === id)[0];
    res.status(200).send(foundPhone);
})
//DELETE ONE REQUEST

    .delete((req, res)=> {
        const {id}= req.params;
        photos = photos.filter(photo => photo._id !== id);
        res.status(204).send();
        })
    
        //PUT REQUEST
        .put((req, res)=> {
            const{id} = req.params;
            let editedPhoto = req.body;
            photos = cats.map(photo => photo._id ? editedPhoto = {...photo, ...editedPhoto}: photo);
            res.status(200).send(editedPhoto);
        })
    app.listen(port, console.log("server running on port " + port));