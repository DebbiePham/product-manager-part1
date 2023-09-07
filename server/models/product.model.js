const mongoose = require('mongoose');



const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, "Title is required"],
        minlength: [2, "Title must be at least 2 characters"],
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [1, "price must be equal or higher than 1 dollar"],
    },
    description: { 
        type: String,
        required: [true, "Description is required"],
        minlength: [10, "Description must be at least 10 characters"],
    }
}, { timestamps: true }); // this automatically give createdAt and updatedAt
module.exports.Product = mongoose.model('Product', ProductSchema);

