const express = require('express');
const bodyParser = require('body-parser');
const logger= require('./middleware/logger.js');
const bountyRouter = require("./routes/bounties.js");


const app = express()
// let bounties = require('./bounties.js')
const port = 8080;

//middleware
app.use(bodyParser.json());
app.use("/bounties", bountyRouter);
app.use(logger);


app.listen(port, () => {
    console.log("Server running on port", + port);
});
