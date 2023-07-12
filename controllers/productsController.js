const Product = require('../models/productModel')


const fetchAllProducts = async(req,res)=>{
    try{
        const products = await Product.find()
        res.json({
            success : true,
            status: 200,
            products
        })
    }
    catch(err){
        console.log(err)
        res.json({
            success : false,
            status: 400,
            data : []
        })
    }
}


const fetchProductById = async(req,res)=>{
    console.log(req.params)
    try{
        const product = await Product.findById(req.params.id)

        // console.log(product)

        res.json({
            success : true,
            status: 200,
            product
        })
    }
    catch(err){
        console.log(err)
        res.json({
            success : false,
            status: 400,
            data : []
        })
    }
}

module.exports = {fetchAllProducts,fetchProductById}



