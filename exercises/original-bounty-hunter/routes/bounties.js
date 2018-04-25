const express = require("express");
const bountyRouter= express.Router();
const uuid = require('uuid');

let bounties = require('../bountiesData.js')

//routes
bountyRouter.route("/")
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

bountyRouter.route('/bounties/:id')
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
module.exports =bountyRouter;
