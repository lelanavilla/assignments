
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


// const logger = require("./middleware/logger.js");
const imagesRouter = require("./routes/images.js");
const bookingsRouter = require("./routes/bookings.js");


const app = express();
const port = process.env.PORT || 8080;


//middleware
app.use(bodyParser.json());
// app.use(logger);


//routes
app.use("/images", imagesRouter);
app.use("/bookings", bookingsRouter);



mongoose.connect("mongodb://localhost:27017/dereks", (err) => {
   if (err) console.error(err);
   console.log("Connected to MongoDB");
})
app.listen(port, () => console.log("Server running on port " + port));


