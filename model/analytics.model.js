const mongoose = require('mongoose');

const schema = mongoose.Schema({
    courier:String
});

module.exports = mongoose.model('Courier',schema);