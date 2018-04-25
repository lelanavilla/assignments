const mongoose = require('mongoose');
const {Schema} = mongoose;

const postsSchema = new Schema({
    title: String,
    description: String
    
})
const PostsModel = mongoose.model("posts", getSchema);
module.exports = PostsModel;
