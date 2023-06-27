const { default: mongoose } = require("mongoose");


const HistorySchema = mongoose.Schema({
    address: String,
    courier: Boolean,
    customerName: String,
    date: String,
    due: Number,
    phone: String,
    products: [{
        productName: String,
        unit: String,
        perUnitPrice: String,
        availableStock: String
    }],
    sellerEmail: String,
    sellerName: String,
    sellerUID: String,
    totalPrice: Number
});

module.exports = mongoose.model('History', HistorySchema);