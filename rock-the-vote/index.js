const express = require("express");

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const logger = require("./middleware/logger.js");

const postRouter = require("./routes/posts.js");


const app = express();
const port = 8080;


app.use(bodyParser.json());
app.use(logger);



app.use("/posts", postRouter);


mongoose.connect("mongodb://localhost:27017/rock-the-vote", (err)=>{
    if(err) console.error(err);
    console.log("Connected to MongoDB");
})

app.listen(port, () => console.log("Server running on port " + port));