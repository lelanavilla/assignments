
const mongoose = require("mongoose");
const { Schema } = mongoose;


//Schema is a constructor
// determines the template for all documents in a collection


const bookingSchema = new Schema({
   name: {
       required: true,
       type: String
   }, 
   email: {
    required: true,
    type: String
},
 phone: {
    required: true,
    type: String
}, 

 message: String
})

// 
//    agencyId: {
//        type: mongoose.Schema.Types.ObjectId,
//        required: true,
//        ref: "agencies"
//    }




const BookingModel = mongoose.model("bookings", bookingSchema);


module.exports = BookingModel;
