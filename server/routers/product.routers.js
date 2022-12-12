const express = require('express')
const{createProduct} = require('../controllers/product.controllers')
const authenticate = require('../middleware/auth/authenticate')
const authorize = require('../middleware/auth/authorize')

const productRouter = express.Router()

productRouter.post('/', authenticate, authorize('ADMIN'), createProduct)

module.exports = {productRouter}