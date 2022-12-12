const express= require('express')
const { userRouter } = require('./user.routers')
const {productRouter} = require('./product.routers')

const rootRouter = express.Router()

rootRouter.use('/users', userRouter)
rootRouter.use('/products', productRouter)

module.exports = {rootRouter}