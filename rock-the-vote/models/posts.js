const mongoose = require('mongoose');
const {Schema} = mongoose;

const postsSchema = new Schema({
    title: String,
    description: String,
    upvotes:Number
    
})
const PostsModel = mongoose.model("posts", postsSchema);

module.exports = PostsModel;
