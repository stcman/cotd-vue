const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	id: String,
    title: String,
    imageUrl: String,
    brand: String,
    price: Number,
    sizes: [Number]
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;