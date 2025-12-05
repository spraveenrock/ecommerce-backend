const mongoose = require('mongoose');
const products = require('./data/product.json');
const productModel = require('./models/productModel');
require('dotenv').config({path: './config/config.env'});

mongoose.connect(process.env.DB_URL)
.then(() => {
    console.log('Connected to MongoDB Atlas');
    return productModel.deleteMany();
})
.then(() => {
    console.log('Cleared existing products');
    return productModel.insertMany(products);
})
.then(() => {
    console.log('Products imported successfully');
    process.exit();
})
.catch(err => {
    console.error('Error:', err);
    process.exit(1);
});