const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const {connectAndListen} = require('./server')
const productsRouter = require('./routes/products')
const usersRouter = require('./routes/usersRoutes')

const app = express()


const allowedOrigins = ['http://localhost:3000'];
app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
}))



app.use(express.json())
app.use(cookieParser())

app.use('/products',productsRouter)
app.use('/users',usersRouter)

connectAndListen(app)