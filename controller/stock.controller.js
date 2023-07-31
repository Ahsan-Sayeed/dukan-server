const stockModel = require("../model/stock.model");

exports.postNewRecord = async (req, res) => {
    try {
        const stock = new stockModel(req.body);
        const result = await stock.save();
        res.status(200).json(result);
    }
    catch (err) {
        console.log(err);
    }
}

exports.getAllRecord = async (req, res) => {
    try {
        const data = req.query.name;
        const result = await stockModel.find({ name: { $regex: data, '$options': 'i' } });
        res.status(200).json(result);
    }
    catch (err) {
        console.log(err);
    }
}

exports.updateRecord = async (req, res) => {
    try {
        const units = req.body.data.map((v, i) => v.unit);
        const restoreData = await stockModel.find({_id: req.params.id},{'sold':1,'_id':0});

        const result = await stockModel.updateOne(
            { _id: req.params.id },
            {
                name: req.body.productName,
                unit: [...new Set(units)],
                sold: [...new Map(req.body.data.map(obj => [JSON.stringify(obj), obj])).values()].map((vx,ix)=>({
                    ...vx,
                    singlePrice:restoreData[0].sold.map((va,ia)=>va.unit).find((vc,ic)=>vc===vx.unit)===undefined?
                    0:
                    restoreData[0].sold.find((v,i)=>v.unit===vx.unit).singlePrice
                }))
            }
        );
        res.status(200).json(result);
    }
    catch (err) {
        console.log(err);
    }
}

exports.deleteRecord = async (req, res) => {
    try {
        const result = await stockModel.deleteOne({ _id: req.params.id });
        res.status(200).json(result);
    }
    catch (err) {
        console.log(err);
    }
}

exports.stockDetails = async (req, res) => {
    try {
        const result = await stockModel.updateOne({ _id: req.params.id }, { $push: { details: req.body } })
        res.status(200).json(result);
    }
    catch (err) {
        console.log(err);
    }
}
exports.updateStockDetails = async (req, res) => {
    try {
        const result = await stockModel.updateOne({ "details._id": req.params.id }, {
            $set: {
                'details.$[xxx].date': req.body.date,
                "details.$[xxx].unit": req.body.unit,
                "details.$[xxx].quantity": req.body.quantity,
                "details.$[xxx].perUnitPrice": req.body.perUnitPrice
            },
        },
            {
                arrayFilters: [
                    { "xxx._id": req.params.id }
                ]
            }
        )
        res.status(200).json(result);
    }
    catch (err) {
        console.log(err);
    }
}
exports.deleteStockDetails = async (req, res) => {
    try {
        // console.log(req.params)
        const result = await stockModel.findOneAndUpdate(
            { _id: req.params.id },
            { $pull: { details: { _id: req.params.item } } },
            { new: true }
        )

        res.status(200).json(result);
    }
    catch (err) {
        console.log(err);
    }
}

exports.updateSellPrice = async (req, res) => {
    try {
        const result = await stockModel.updateOne({ "sold._id": req.params.idc }, {
            $set: {
                'sold.$[xxx].singlePrice': req.body.sellingPrice,
            }
        },
            {
                arrayFilters: [
                    { "xxx._id": req.params.idc }
                ]
            }
        )
        res.status(200).json(result);
    }

    catch (err) {
        console.log(err)
    }
}