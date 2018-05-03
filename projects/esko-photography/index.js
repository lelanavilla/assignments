
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const logger = require("./middleware/logger.js");
const photoRouter = require("./routes/photos.js");
const bookingRouter = require("./routes/bookings.js");


const app = express();
const port = 8080;


//middleware
app.use(bodyParser.json());
app.use(logger);


//routes
app.use("/bookings", bookingRouter);
app.use("/photos", photoRouter);



mongoose.connect("mongodb://localhost:27017/dereks", (err) => {
   if (err) console.error(err);
   console.log("Connected to MongoDB");

})
app.listen(port, () => console.log("Server running on port " + port));

