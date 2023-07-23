const { default: mongoose } = require("mongoose");


const HistorySchema = mongoose.Schema({
    products: [{
        productName: String,
        qu: [{
            unit: String,
            qty: Number,
            price: Number
        }],
        uid: String,
        _id: String
    }],
    date: String,
    customerName: String,
    phone: String,
    address: String,
    totalPrice: Number,
    due: Number,
    courier: Boolean,
    courierData: String,
    sellerUID: String,
    sellerName: String,
    sellerEmail: String,
    time: Number,

});
// HistorySchema.index({phone:"text",customerName:"text",address:'text'});
module.exports = mongoose.model('History', HistorySchema);