const express = require('express');
const uuid = require('uuid');
const bodyParser = require('body-parser');
const app = express()
let bounties = require('./bounties.js')
const port = 8080;

//middleware
app.use(bodyParser.json());

//routes
app.route("/bounties")
    .get((req, res) => {
        res.status(200).send(bounties);
    })
    //POST REQUEST
    .post((req, res) => {
        const newBounty = req.body;
        newBounty._id = uuid();
        bounties.push(newBounty);
        res.status(201).send(newBounty);
    })
//GET ONE request route

app.route('/bounties/:id')
    .get((req, res) => {
        const { id } = req.params;
        const foundBounty = bounties.filter(bounty => bounty._id === id)[0];
        res.status(200).send(foundBounty);
    })



    //DELETE ID
    .delete((req, res) => {
        const { id } = req.params;
        bounties = bounties.filter(bounty = bounty._id !== id);
        res.status(204).send();

    })
    //PUT REQUEST
    .put((req, res) => {
        const { id } = req.params;
        let editedBounty = req.body;
        bounties = bounties.map(bounty => bounty._id === id ? editedBounty = { ...bounty, ...editedBounty } : bounty);
        res.status(200).send(editedBounty)
    })


app.listen(port, () => {
    console.log("Server running on port", + port);
});
