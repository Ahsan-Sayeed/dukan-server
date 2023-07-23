const mongoose = require('mongoose');

const schema = mongoose.Schema({
    productName: String,
    qu: [{
        unit: String,
        qty: Number,
        price: Number
    }],
    uid: String
});

module.exports = mongoose.model('Spreadsheet', schema);