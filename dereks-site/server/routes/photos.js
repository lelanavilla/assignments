
const express = require("express");
const photosRouter = express.Router();


// const BookingModel = require("../models/bookings.js");
const PhotoModel = require("../models/photos.js");


//actual routes go here
photosRouter.route("/")
   .get((req, res) => {
    PhotosModel.find(req.query)
           .populate("Id")
           .exec((err, foundPhotos) => {
               if (err) return res.send(err);
               res.status(200).send(foundPhotos)
           });
   })

//POST
   .post((req, res) => {
       const newPhoto = new PhotoModel(req.body);
       newPhoto.save((err, savedPhoto) => {
           if (err) return res.send(err);
           res.status(200).send(newPhoto);

        //    PhotoModel.populate(savedPhoto, { path: "agencyId" }, (err, popCat) => {
            // if (err) return res.send(err);
            // res.status(201).send(newPhoto);
        });
    })

// GET one request
// photoRouter.route("/:id")
// .get((req, res) => {
//   PhotoModel.findOne({ _id: req.params.id }),(err, foundPhoto)=>{
//         if(err) res.send(err);
//        res.status(200).send(foundPhoto)
//     })
//         // .populate("agencyId")
//         // .exec((err, foundCat) => {
//             if (err) return res.send(err);
//             if (!foundCat) return res.status(404).send({ message: "Cat not found" })
//             res.status(200).send(foundCat);
        // });

// DELETE one request
.delete((req, res) => {
    PhotoModel.findOneAndRemove({_id:req.params.id},(err, deletedPhoto)=>{
        if(err) return res.send(err);
        res.status(204).send();
    })
    })
module.exports = photosRouter;