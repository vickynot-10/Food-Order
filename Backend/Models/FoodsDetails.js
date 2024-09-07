import mongoose from "mongoose";

const FoodDetailsSchema = new mongoose.Schema({
    Foodname: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    hotelName: {
        type: String,
        required: true
    },
    ratings: {
        type: String
    },
    cost: {
        type: Number,
        required: true
    },
    types: {
        type: String
    }
})

export const FoodDetailsModel = mongoose.model('fooddetailsModel', FoodDetailsSchema)