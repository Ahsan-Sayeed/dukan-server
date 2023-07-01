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
        quantity: Number,
        totalPrice: Number,
        productId: String
    }],
    sellerEmail: String,
    sellerName: String,
    sellerUID: String,
    totalPrice: Number,
    time: Number
});
// HistorySchema.index({phone:"text",customerName:"text",address:'text'});
module.exports = mongoose.model('History', HistorySchema);