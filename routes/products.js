const express = require('express')
const {fetchAllProducts, fetchProductById} = require('../controllers/productsController')

const router = express.Router()

router.get('/',fetchAllProducts)
router.get('/:id',fetchProductById)

module.exports = router