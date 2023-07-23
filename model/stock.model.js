const { default: mongoose } = require("mongoose");

const StockSchema = mongoose.Schema(
    {
        uid: String,
        name: String,
        unit: [String],
        details: [{
            date: String,
            unit: String,
            quantity: Number,
            perUnitPrice: Number,
        }],
        sold: [{ unit: String, qty: Number, singlePrice: Number }]
    }
)

module.exports = mongoose.model('Stock', StockSchema);