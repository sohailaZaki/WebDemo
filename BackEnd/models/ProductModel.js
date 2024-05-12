const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    },
    ratings : [
       {
        star : Number,
        comment : String,
        postedby : {type : mongoose.Schema.Types.ObjectId, ref : "User" }
       }
    ],
    totalrating: {
        type: String,
        default: 0,
      },
});

module.exports = mongoose.model('Product', productSchema);
