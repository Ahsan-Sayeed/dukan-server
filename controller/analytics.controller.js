const Analytics = require('../model/analytics.model');

exports.postAnalyticsData = async (req, res) => {
    try {
        const AnalyticsTable = new Analytics(req.body);
        const result = await AnalyticsTable.save();
        res.status(200).json(result);
        // console.log(result);
    }
    catch (err) {
        console.log(err);
    }
}

exports.getAnalyticsData = async (req, res) => {
    try {
        const AnalyticsTable = await Analytics.find({}).collation({locale: "en"}).sort({productName:1});
        res.status(200).send(AnalyticsTable);
    }
    catch (err) {
        console.log(err)
    }
}

exports.deleteAnalyticsData = async (req, res) => {
    try {
        const result = await Analytics.deleteOne({ _id: req.params.id });
        res.status(200).json(result);
    }
    catch (err) {
        console.log(err);
    }
}