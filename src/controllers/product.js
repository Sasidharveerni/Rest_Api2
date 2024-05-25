const {Product} = require('../models/product');


const readProduct = async (req, res) => {
   try {
    const products = await Product.find();
    res.json({
        status: 'Success',
        data: products
    })
   } catch (error) {
    res.status(500).json({
        status: 'Failure',
        message: 'Something went wrong'
    })
   }
}

const createProduct = async (req, res) => {
    try {
        const {productName, productPrice, productImg, IsWishlisted} = req.body;
        await Product.create({productName, productPrice, productImg, IsWishlisted})
        res.json({
            status: 'Success',
            message: 'product added successfully'
        })
    } catch (error) {
        res.status(500).json({
            status: 'Failure',
            message: 'Something went wrong',
            error: `${error}`
        })
    }
}

const updateProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const {productName, productPrice, productImg, IsWishlisted, } = req.body;
        await Product.findByIdAndUpdate(id, {productName, productPrice, productImg, IsWishlisted, })
        res.json({
            status: 'product updated successfully',
            data: products
        })
    } catch (error) {
        res.status(500).json({
            status: 'Failure',
            message: 'Something went wrong'
        })
    }
}


const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;
        await Product.findByIdAndDelete(id)
        res.json({
            status: 'product deleted successfully',
            data: products
        })

    } catch (error) {
        res.status(500).json({
            status: 'Failure',
            message: 'Something went wrong'
        })
    }
}


module.exports = {
    readProduct,
    createProduct,
    updateProduct,
    deleteProduct
}