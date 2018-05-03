
const express = require("express");
const bookingRouter = express.Router();


const BookingModel = require("../models/bookings.js");

bookingRouter.route("/")

.post((req, res) => {
    const newBooking = new BookingModel(req.body);
    newBooking.save((err, savedBooking) => {
        if (err) return res.send(err);
        res.status(200).send(newBooking);

     
     });
 })
module.exports= bookingRouter;