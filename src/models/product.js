const mongoose = require('mongoose')

const Product = mongoose.model('product', {
    productName: String,
    productPrice: Number,
    productImg: String,
    IsWishlisted: Boolean,
})

module.exports = {Product}