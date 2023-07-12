const mongoose = require('mongoose')


const reviewSchema = new mongoose.Schema({

    user : {
        type: mongoose.Schema.Types.ObjectId,
        required : true,
        ref: 'User'
    },

    name: String,
    rating: Number,
    comment: String 
})




const productSchema = new mongoose.Schema({

    user : {
        type: mongoose.Schema.Types.ObjectId,
        required : true,
        ref: 'User'
    },

    title: String,
    image: String,
    description : String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock : Number,
    brand: String,
    category: String,
    thumbnail: String,
    reviews: [reviewSchema]
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product