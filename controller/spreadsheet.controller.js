const analyticsModel = require('../model/analytics.model');
const Spreadsheet = require('../model/spreadsheet.model');

exports.postSprShData = async (req, res) => {
    try {
        const SprShTable = new Spreadsheet(req.body);
        const result = await SprShTable.save();
        res.status(200).json(result);
        // console.log(result);
    }
    catch (err) {
        console.log(err);
    }
}

exports.getSprShData = async (req, res) => {
    try {
        const SprShTable = await Spreadsheet.find({uid:req.query.uid});
        const analytics = await analyticsModel.find({});
        // const newData = SprShTable.map((v,i)=>({...{...v}._doc,productName:"sdf"}));
        // const newData2 = SprShTable.map((v)=>analytics.find(data=>data._id.toString() === v.productId.toString()).productName)
        const newData = SprShTable.map((v)=>({...{...v}._doc,productName:analytics.find(data=>data?._id?.toString() === v?.productId?.toString())?.productName,unit:analytics.find(data=>data?._id?.toString() === v?.productId?.toString())?.unit}))
        res.status(200).send(newData);
    }
    catch (err) {
        console.log(err)
    }
}

exports.deleteSprShData = async (req, res) => {
    try {
        const result = await Spreadsheet.deleteOne({ _id: req.params.id });
        res.status(200).json(result);
    }
    catch (err) {
        console.log(err);
    }
}