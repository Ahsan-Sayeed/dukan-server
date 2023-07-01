const mongoose = require('mongoose');

const schema = mongoose.Schema({
    productId: String,
    quantity: Number,
    totalPrice: Number,
    uid: String
});

module.exports = mongoose.model('Spreadsheet',schema);