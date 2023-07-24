const express = require('express')
const {authUser,getProfile, logOut} = require('../controllers/usersController')
const {protect,adminProtect} = require('../middlewares/authMiddleware')

const router = express.Router()

router.post('/login',authUser)
router.get('/profile',protect,getProfile)
router.post('/logout',protect,logOut)

module.exports = router
