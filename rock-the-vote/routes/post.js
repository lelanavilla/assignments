const express = require('express');
const postsRouter = express.Router();
const uuid = require("uuid");

const PostsModel = require('../models/posts.js');

postsRouter.route("/")
.get((req, res)=>{
    PostsModel.find(req.query, (err,foundPosts) =>{
        if(err) return res.send(err);
        res.status(200).send(foundPosts);
    })
})

.post((req,res) => {
const newPost = new PostsModel(req.body);
newPost.save((err, addedPost) =>{
    if(err) return res.send(err);
    res.status(201).send(addedPost);
})
})

postsRouter.route('/posts/:id')
postsRouter.route("/:id")
.get((req, res) =>{
    PostsModel.findOne({_id: req.params.id}, (err, foundPost)=>{
        if(err) return res.send(err);
        if(!foundPost) return res.status(404)
        res.status(200).send(foundPost);
    })
})


module.exports = postsRouter;