
const mongoose = require("mongoose");
const { Schema } = mongoose;


//Schema is a constructor
// determines the template for all documents in a collection


const photoSchema = new Schema({
   title: String,
   file_location: {
       required: true,
       type: String
   },
  
//    agencyId: {
//        type: mongoose.Schema.Types.ObjectId,
//        required: true,
//        ref: "agencies"
//    }
})



const PhotoModel = mongoose.model("photos", photoSchema);


module.exports = PhotoModel;
