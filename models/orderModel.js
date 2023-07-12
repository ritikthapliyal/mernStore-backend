const mongoose = require('mongoose')


const orderSchema = new mongoose.Schema({

    user : {
        type: mongoose.Schema.Types.ObjectId,
        required : true,
        ref: 'User'
    },

    orderItems: [
        {
            name: String,
            qty: Number,
            image: String,
            price:Number,
            product:{
                type:mongoose.Schema.Types.ObjectId,
                require:true,
                ref:"Product"
            }
        }
    ],
    shippingAddress:{
        address:String,
        city:String,
        postalCode:String,
        country:String
    },
    paymentMethod: String,
    paymentResult: {
        id:String,
        status:String,
        update_time:String,
        email_address:String
    },
    itemsPrice:Number,
    taxprice:Number,
    shippingPrice: Number,
    totalPrice:Number,
    isPaid: Boolean,
    paidAt: Date,
    isDelivered: Boolean,
    deliveredAt:Date
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order