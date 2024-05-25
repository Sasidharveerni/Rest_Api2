
const express = require('express')

const router = express.Router();

const {readProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product')


router.get('/products', readProduct)


router.post('/products', createProduct)

router.patch('/products/:id', updateProduct)

router.delete('/products/:id', deleteProduct)

module.exports = router