// const analyticsModel = require('../model/analytics.model');
const History = require('../model/history.model');
const Spreadsheet = require('../model/spreadsheet.model');

exports.postHistory = async (req, res) => {
    try {
        const HistoryTable = new History({...req.body,time:Date.now()});
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
                { date: { $regex: data, '$options': 'i' } }
            ]  
        }).sort({time:-1});
        res.status(200).send(history);
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