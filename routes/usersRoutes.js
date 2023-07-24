const express = require('express')
const {authUser,getProfile, logOut, register} = require('../controllers/usersController')
const {protect,adminProtect} = require('../middlewares/authMiddleware')

const router = express.Router()

router.post('/login',authUser)
router.post('/signup',register)
router.post('/logout',protect,logOut)
router.get('/profile',protect,getProfile)

module.exports = router
