const Courier = require('../model/analytics.model');

exports.postCourierData = async (req, res) => {
    try {
        const CourierTable = new Courier(req.body);
        const result = await CourierTable.save();
        res.status(200).json(result);
    }
    catch (err) {
        console.log(err);
    }
}
exports.getCourierData = async (req, res) => {
    try {
        const result = await Courier.find({});
        res.status(200).json(result);
    }
    catch (err) {
        console.log(err);
    }
}

exports.deleteCourierData = async (req, res) => {
    try {
        const result = await Courier.deleteOne({_id:req.params.id});
        res.status(200).json(result);
    }
    catch (err) {
        console.log(err);
    }
}




exports.postAnalyticsData = async (req, res) => {
    try {
        const CourierTable = new Courier(req.body);
        const result = await CourierTable.save();
        res.status(200).json(result);
    }
    catch (err) {
        console.log(err);
    }
}


exports.getAnalyticsData = async (req, res) => {
    try {
        const AnalyticsTable = await Courier.find({}).collation({ locale: "en" }).sort({ productName: 1 });
        res.status(200).send(AnalyticsTable);
    }
    catch (err) {
        console.log(err)
    }
}

exports.deleteAnalyticsData = async (req, res) => {
    try {
        const result = await Courier.deleteOne({ _id: req.params.id });
        res.status(200).json(result);
    }
    catch (err) {
        console.log(err);
    }
}