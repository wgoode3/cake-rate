const mongoose = require("mongoose"),
  ReviewSchema = require('./review.js');

const CakeSchema = new mongoose.Schema({
    baker: {
        type: String,
        required: [true, 'Baker name is required']
    },
    image: {
        type: String,
        required: [true, 'Image is required']
    },
    reviews: [ReviewSchema]
}, {timestamps: true});

mongoose.model("Cake", CakeSchema);