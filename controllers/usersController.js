const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const authUser = async(req,res)=>{
   
    try{
        const {email,password} = req.body
    
        const user = await User.findOne({email})

        if(user && await bcrypt.compare(password,user.password)){

            const token = jwt.sign({ userId : user._id}, "thisismysecret",{
                expiresIn : "1m"
            })

            res.cookie('jwt', token, {
                httpOnly:true,
                sameSite: 'strict',
                maxAge : 2 * 60 * 1000
            })

            res.json({
                _id : user._id,
                name: user.name,
                email: user.email,
            })
        }
        else{
            res.json({
                message: "Wrong Email Or Password"
            })
        }
    }
    catch(err){
        res.json({error:err})
    }

}

const  getProfile = async(req,res)=>{
    res.json({
        message: "profile route"
    })
}

const logOut = async(req,res)=>{
    res.cookie('jwt',"",{
        httpOnly:true,
        expires: new Date(0)
    })
    res.json({
        message: "User Logged Out"
    })
}


module.exports = {authUser,getProfile, logOut}