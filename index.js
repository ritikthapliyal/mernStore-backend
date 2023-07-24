const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const {connectAndListen} = require('./server')
const productsRouter = require('./routes/products')
const usersRouter = require('./routes/usersRoutes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use('/products',productsRouter)
app.use('/users',usersRouter)

connectAndListen(app)