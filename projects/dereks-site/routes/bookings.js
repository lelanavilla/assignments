const express = require('express');
const bookingsRouter = express.Router();

const BookingsModel = require('../models/bookings.js');

bookingsRouter.get("/", (req, res) => {
    BookingsModel.find(req.query, (err, foundBookings) => {
        if (err) return res.send(err);
        res.status(200).send(foundBookings);
    })
})

bookingsRouter.post("/",(req, res) => {
    const newBooking = new BookingsModel(req.body);
    newBooking.save((err, newBooking) => {
        if (err) return res.send(err);
        res.status(201).send(newBooking);
    })
})


module.exports = bookingsRouter;