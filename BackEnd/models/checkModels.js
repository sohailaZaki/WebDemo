const mongoose = require('mongoose');

const checkoutSchema = new mongoose.Schema( {
    iid:{
        type: Number,
        required: true,
    },
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    phoneNumber:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    governorate:{
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: true,
    },
    TotalPrice:{
        type: Number,
        required: true,
    },myArray: [
        {
          IdOfProduct: {
            type: String,
            required: true,
          },
          count: {
            type: Number,
            required: true,
          },
        },
    ],
    date:{
        type: Date,
        default: Date.now,
    },
    avilable:{
        type: Boolean,
        default: true,
    },
  });
  

  module.exports = mongoose.model('checkoutSchema', checkoutSchema);

