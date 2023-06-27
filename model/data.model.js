const mongoose = require('mongoose');

const schema = mongoose.Schema({
    title: String,
    desc: String
});

module.exports = mongoose.model('TodoTable',schema);