const express = require('express')
const cors = require('cors')
const {connectAndListen} = require('./server')
const productsRouter = require('./routes/products')

const app = express()

app.use(cors())

app.use('/products',productsRouter)

connectAndListen(app)