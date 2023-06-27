// const analyticsModel = require('../model/analytics.model');
const History = require('../model/history.model');
const Spreadsheet = require('../model/spreadsheet.model');

exports.postHistory = async (req, res) => {
    try {
        const HistoryTable = new History(req.body);
        const result = await HistoryTable.save();
        res.status(200).json(result);
        // console.log(result);
    }
    catch (err) {
        console.log(err);
    }
}

exports.getHistory = async (req, res) => {
    try {
        const history = await History.find({});
        // const analytics = await analyticsModel.find({});
        // const newData = History.map((v)=>({...{...v}._doc,productName:analytics.find(data=>data?._id?.toString() === v?.productId?.toString())?.productName,unit:analytics.find(data=>data?._id?.toString() === v?.productId?.toString())?.unit}))
        res.status(200).send(history);
    }
    catch (err) {
        console.log(err)
    }
}

exports.deleteHistory = async (req, res) => {
    try {
        const result = await Spreadsheet.deleteMany({});
        // console.log(result)
        res.status(200).json(result);
    }
    catch (err) {
        console.log(err);
    }
}
exports.deleteHistory2 = async (req, res) => {
    try {
        const result = await History.deleteMany({});
        // console.log(result)
        res.status(200).json(result);
    }
    catch (err) {
        console.log(err);
    }
}