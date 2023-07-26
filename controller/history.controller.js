// const analyticsModel = require('../model/analytics.model');
const History = require('../model/history.model');
const Spreadsheet = require('../model/spreadsheet.model');
const stockModel = require('../model/stock.model');

exports.postHistory = async (req, res) => {
    try {
        const HistoryTable = new History({ ...req.body, time: Date.now() });
        const result = await HistoryTable.save();
        res.status(200).json(result);
    }
    catch (err) {
        console.log(err);
    }
}

exports.getHistory = async (req, res) => {
    try {
        const data = req.query.data;
        // const history = await History.find({$text:{$search:''}});
        const history = await History.find({
            $or: [
                { customerName: { $regex: data, '$options': 'i' } },
                { phone: { $regex: data } },
                { address: { $regex: data, '$options': 'i' } },
                { date: { $regex: data, '$options': 'i' } },
                { courierData: { $regex: data, '$options': 'i' } }
            ]
        }).sort({ time: -1 });
        res.status(200).send(history);
    }
    catch (err) {
        console.log(err)
    }
}

exports.getSoldHistory = async (req, res) => {
    try {
        // const data = req.query.data;
        // const history = await History.find({$text:{$search:''}});
        const history = await History.find(
            {
                products: { $elemMatch: { productName: req.query.name } }
            },
            {
                products: { $elemMatch: { productName: req.query.name } }
            }
        );
        const data = history.map((v, i) => v.products.map((vx, ix) => vx.qu))
        const newArray = data.flat(2);
        const unit = [...new Set(newArray.map((v, i) => v.unit))];

        const netQty = unit.map((v, i) => newArray.map((vx, ix) => {
            if (vx.unit === v) {
                return vx.qty;
            }
        })
            .filter((a, i) => typeof (a) === "number")
            .reduce((a, b) => a + b, 0)
        )

        const netPrice = unit.map((v, i) => newArray.map((vx, ix) => {
            if (vx.unit === v) {
                return vx.price;
            }
        })
            .filter((a, i) => typeof (a) === "number")
            .reduce((a, b) => a + b, 0)
        )

        const finalObject = unit.map((v, i) => ({ unit: v, qty: netQty[i], price: netPrice[i] }));

        res.status(200).send(finalObject);
    }
    catch (err) {
        console.log(err)
    }
}

exports.getAvailableHistory = async (req, res) => {
    try {
        // const data = req.query.data;
        // const history = await History.find({$text:{$search:''}});
        const history = await History.find(
            {
                products: { $elemMatch: { productName: req.query.name } }
            },
            {
                products: { $elemMatch: { productName: req.query.name } }
            }
        );
        const data = history.map((v, i) => v.products.map((vx, ix) => vx.qu))
        const newArray = data.flat(2);
        const unit = [...new Set(newArray.map((v, i) => v.unit))];

        const netQty = unit.map((v, i) => newArray.map((vx, ix) => {
            if (vx.unit === v) {
                return vx.qty;
            }
        })
            .filter((a, i) => typeof (a) === "number")
            .reduce((a, b) => a + b, 0)
        )

        const netPrice = unit.map((v, i) => newArray.map((vx, ix) => {
            if (vx.unit === v) {
                return vx.price;
            }
        })
            .filter((a, i) => typeof (a) === "number")
            .reduce((a, b) => a + b, 0)
        )

    

//stock calculation
        const Stock = await stockModel.find({ name: req.query.name }, { 'details': 1 });
        const newArrayAvailable = Stock.map((v, i) => v.details).flat(2);
        const unitAvailable = [...new Set(Stock.map((v, i) => v.details.map((vx, ix) => vx.unit)).flat(2))];
        const netQtyAvailable = unitAvailable.map((v, i) => newArrayAvailable.map((vx, ix) => {
            if (vx.unit === v) {
                return vx.quantity;
            }
        })
            .filter((a, i) => typeof (a) === "number")
            .reduce((a, b) => a + b, 0)
        )
        const netPriceAvailable = unitAvailable.map((v, i) => newArrayAvailable.map((vx, ix) => {
            if (vx.unit === v) {
                return vx.perUnitPrice;
            }
        })
            .filter((a, i) => typeof (a) === "number")
            .reduce((a, b) => a + b, 0)
        )
    
        // const finalObject = unit.map((v, i) => ({ unit: v, qty: netQty[i], price: netPrice[i] }));
        const availableObj = unitAvailable.map((v, i) => ({ 
            unit: v, 
            qty: netQty.length>0 ? netQtyAvailable[i]-netQty[i] : netQtyAvailable[i], 
            price: netPrice.length>0 ? netPriceAvailable[i]-netPrice[i] : netPriceAvailable[i]  
        }));

        // console.log(availableObj);

        res.status(200).send(availableObj);
    }
    catch (err) {
        console.log(err)
    }
}

// exports.deleteHistory = async (req, res) => {
//     try {
//         const result = await Spreadsheet.deleteMany({});
//         res.status(200).json(result);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }