const mongoose = require("mongoose")
const users = require('./Data/users')
const products = require('./Data/products')

const User = require('./models/userModel')
const Product = require('./models/productModel')
const Order = require('./models/orderModel')

const importData = async()=>{
    try{

        await mongoose.connect('mongodb+srv://project-1:kickass123@cluster0.kgmw1aq.mongodb.net/NATOURS?retryWrites=true&w=majority');

        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)
        
        const adminUser = createdUsers[0]._id
        
        const sampleProducts = products.map((product)=>{
            return {...product,user: adminUser}
        })

        await Product.insertMany(sampleProducts)

        console.log("Data Imported")

        process.exit(1)
    }
    catch(err){
        console.log(err)
        process.exit(0)
    }
}



importData()