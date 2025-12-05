const ProductModel = require('../models/productModel');

//Get Products API - /api/v1/products
exports.getProduct = async (req, res, next) => {
    try {
        const query = req.query.keyword?{ name : { 
            $regex: req.query.keyword,
            $options: 'i'
        }}:{}
        const products = await ProductModel.find(query);
        res.json({
            success: true,
            products
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error'
        })
    }
}

//Get Single Products API - /api/v1/product/:id
exports.getSingleProduct = async (req, res, next) => {
    try {
    console.log(req.params.id, 'ID')
    const product = await ProductModel.findById(req.params.id);

    res.json({
        success: true,
        product
    })
} catch (error) {
    res.status(404).json({
        success: false,
        message: 'Unable to get Product with that ID'
    })
}
}
