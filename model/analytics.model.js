const mongoose = require('mongoose');

const schema = mongoose.Schema({
    productName: String,
    unit: String,
    perUnitPrice: String,
    availableStock: String
});

module.exports = mongoose.model('Analytics',schema);