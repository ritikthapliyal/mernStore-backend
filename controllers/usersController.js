const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')



//generates token
function generateToken(res,userId){

    const token = jwt.sign({userId}, "thisismysecret",{
        expiresIn : "2m"
    })

    res.cookie('jwt', token, {
        httpOnly:true,
        sameSite: 'strict',
        maxAge : 2 * 60 * 1000,
    })

}



const authUser = async(req,res)=>{

    console.log(req.body)
   
    try{
        const {email,password} = req.body
    
        const user = await User.findOne({email})

        console.log(user)

        if(user && await bcrypt.compare(password,user.password)){

            generateToken(res,user._id)

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

const register = async(req,res)=>{
    
    try{

        const {email,password,name} = req.body
        
        const userExists = await User.findOne({email})

        console.log(userExists)

        if(userExists){
            res.status(400).json({
                message: "Email already in use"
            })
        }

        const salt = await bcrypt.genSalt(12)
        const encPassword = await bcrypt.hash(password,salt)

        const user = await User.create({
            name,
            email,
            password : encPassword
        })

        if(user){
            
            generateToken(res,user._id)

            res.status(201).json({
                _id : user._id,
                name: user.name,
                email: user.email,
            })
        }

    }catch(err){
        res.json({error:err})
    }
}

const getProfile = async(req,res)=>{

    try{

        const user = await User.findById(req.user._id)
    
        res.status(200).json({
                    _id : user._id,
                    name: user.name,
                    email: user.email,
        })
    }
    catch(err){
        console.log(err)
        res.status(400).json({error:err})
    }
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


module.exports = {authUser, getProfile, logOut, register}