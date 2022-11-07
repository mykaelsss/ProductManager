const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [ true, "Please add a title." ]
    },
    price: {
        type: Number,
        required: [true, "Please add a price." ]
    },
    description: {
        type: String,
        required: [ true, "Please add a description." ]
    }
}, { timestamps: true } );

module.exports.Product = mongoose.model("Product", ProductSchema);
